# 👨‍💻 👩‍💻

Install:

```sh
$ npm i -g panva/jwterminal
```

Use:
```sh
$ pbpaste | jwt
```

Output:
```json
Header:
    {
      "alg": "EdDSA",
      "typ": "JWT",
      "kid": "CLjPrbijCB2z9dScRNpM1mSGOQVOIByTmd18Ft2eiAQ"
    }

Payload:
    {
      "urn:oidc-provider:example:foo": "bar",
      "jti": "cJaKmqLh8r3-FYS6QtiqH",
      "sub": "foo",
      "iat": 1562828328,
      "exp": 1562831928,
      "scope": "openid profile email",
      "iss": "https://op.panva.cz",
      "aud": "mlrmOmnSy7XGzO_UVUNnO"
    }

Signature:
    VALIDATED using

    JWK

    {
      "use": "sig",
      "kid": "CLjPrbijCB2z9dScRNpM1mSGOQVOIByTmd18Ft2eiAQ",
      "kty": "OKP",
      "crv": "Ed25519",
      "x": "lDkysGJKRmJeUp8ncTyGraHPHHiIfdxSajxGm7Srla8"
    }

    PEM

    -----BEGIN PUBLIC KEY-----
    MCowBQYDK2VwAyEAlDkysGJKRmJeUp8ncTyGraHPHHiIfdxSajxGm7Srla8=
    -----END PUBLIC KEY-----


JWT Claims:
    VALID
```

## Resources

- https://github.com/panva/jose for JOSE
- https://github.com/panva/node-openid-client for the compliant issuer discovery
- https://github.com/sindresorhus for all the amazing packages we can all rely on ❤️
