const assert = require('assert');
const { createPublicKey } = require('crypto');
const { URL } = require('url');

const { JWT, JWS, JWKS, JWK } = require('jose');
const getStdin = require('get-stdin');
const pad = require('pad-stdio');
const cj = require('color-json');
const { Issuer, custom } = require('openid-client');
const got = require('got');

const timeout = 5000;

Issuer[custom.http_options] = (options) => ({ ...options, timeout });

const isUrl = (val) => {
  try {
    const { protocol } = new URL(val);
    return ['http:', 'https:'].includes(protocol);
  } catch (err) {
    return false;
  }
}

module.exports = async function verify(token) {
  if (!token) {
    token = (await getStdin()).trim().replace(/\s/g, '');
    assert(token, 'token must be passed in stdin or as a parameter');
  }

  const { header, payload, signature } = JWT.decode(token, { complete: true });

  console.log('\nHeader:');
  pad.stdout('    ');
  console.log(cj(header));
  pad.stdout();
  console.log('\nPayload:');
  pad.stdout('    ');
  console.log(cj(payload));
  pad.stdout();

  let keyOrStore;
  if (header.jku) { // (JWK Set URL) Header Parameter
    // fetch, parse as json, body => import as JWKS
    keyOrStore = JWKS.asKeyStore((await got.get(header.jku, { timeout, json: true })).body);
  } else if (header.jwk && header.jwk.kty) { // (JSON Web Key) Header Parameter
    // import as JWK
    keyOrStore = JWK.asKey(header.jwk);
  } else if (header.x5c) { // (X.509 Certificate Chain) Header Parameter
    // first member must be the one that was signing, take the DER PKIX value
    // wrap it in PEM headers, import as PEM Certificate
    keyOrStore = JWK.asKey(createPublicKey(`-----BEGIN CERTIFICATE-----\n${header.x5c[0]}\n-----END CERTIFICATE-----`));
  } else if (header.x5u) { // (X.509 URL) Header Parameter
    // fetch, dont parse as json, take the body's first occurence of PEM's closing wrapping header
    // slice it, import as PEM Certificate
    const certs = (await got.get(header.x5u, { timeout })).body;
    const i = certs.toString().indexOf('-----END CERTIFICATE-----');
    const cert = certs.slice(0, i + 25).toString('ascii').trim();
    keyOrStore = JWK.asKey(cert);
  } else if (typeof header.alg === 'string' && header.alg !== 'none' && !header.alg.startsWith('HS') && isUrl(payload.iss)) { // (Issuer) Claim
    // when asymmetric alg is used, discover the Authorization Server (either OIDC discovery or RFC8414)
    // get the jwks_uri and retrieve the keystore
    const issuer = await Issuer.discover(payload.iss);
    issuer[custom.http_options] = (options) => ({ ...options, timeout });
    // jose versions may be out of sync between root dep and openid-client so just re-wrap here
    keyOrStore = JWKS.asKeyStore((await issuer.keystore()).toJWKS())
  }

  if (keyOrStore) {
    console.log('\nSignature:');
    pad.stdout('    ');
    try {
      const { key } = JWS.verify(token, keyOrStore, { complete: true });
      console.log('VALIDATED using\n');
      console.log('JWK\n');
      console.log(cj(key), '\n')
      console.log('PEM\n');
      console.log(key.toPEM())
    } catch (err) {
      console.log(err.message);
    }
    pad.stdout();

    console.log('\nJWT Claims:');
    pad.stdout('    ');
    try {
      JWT.verify(token, keyOrStore);
      console.log('VALID');
    } catch (err) {
      console.log(err.message);
    }
  }

  return '';
}
