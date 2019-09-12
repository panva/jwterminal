const assert = require('assert');
const fs = require('fs');
const { promisify } = require('util');

const { JWE, JWKS } = require('@panva/jose');
const getStdin = require('get-stdin');

const readFile = promisify(fs.readFile);

module.exports = async function decrypt(keystore, token = '[DEFAULT FROM STDIN]') {
  if (!token || token === '[DEFAULT FROM STDIN]') {
    token = (await getStdin()).trim().replace(/\s/g, '');
    assert(token, 'token must be passed in stdin or as a parameter');
  }

  const keys = JWKS.asKeyStore(JSON.parse(await readFile(keystore)));

  return JWE.decrypt(token, keys).toString();
}
