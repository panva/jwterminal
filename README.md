# 👨‍💻 👩‍💻

Install:

```sh
$ npm i -g panva/jwterminal
```

## JWT

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

## JWE? No problem

Use:
```sh
$ pbpaste | jwe path/to/jwks.json | jwt
```

Output:
```JSON
pbpaste | jwe keys.json | jwt

Header:
    {
      "alg": "PS256",
      "typ": "JWT",
      "kid": "r1LkbBo3925Rb2ZFFrKyU3MVex9T2817Kx0vbi6i_Kc"
    }

Payload:
    {
      "sub": "foo",
      "birthdate": "1987-10-16",
      "family_name": "Doe",
      "gender": "male",
      "given_name": "John",
      "locale": "en-US",
      "middle_name": "Middle",
      "name": "John Doe",
      "nickname": "Johny",
      "picture": "http://lorempixel.com/400/200/",
      "preferred_username": "johnny",
      "profile": "https://johnswebsite.com",
      "updated_at": 1454704946,
      "website": "http://example.com",
      "zoneinfo": "Europe/Berlin",
      "email": "johndoe@example.com",
      "email_verified": false,
      "aud": "5GjjQqCrIIeIJYCRzGwxY",
      "exp": 1562834869,
      "iat": 1562831522,
      "iss": "https://op.panva.cz"
    }

Signature:
    VALIDATED using

    JWK

    {
      "use": "sig",
      "kid": "r1LkbBo3925Rb2ZFFrKyU3MVex9T2817Kx0vbi6i_Kc",
      "e": "AQAB",
      "n": "xwQ72P9z9OYshiQ-ntDYaPnnfwG6u9JAdLMZ5o0dmjlcyrvwQRdoFIKPnO65Q8mh6F_LDSxjxa2Yzo_wdjhbPZLjfUJXgCzm54cClXzT5twzo7lzoAfaJlkTsoZc2HFWqmcri0BuzmTFLZx2Q7wYBm0pXHmQKF0V-C1O6NWfd4mfBhbM-I1tHYSpAMgarSm22WDMDx-WWI7TEzy2QhaBVaENW9BKaKkJklocAZCxk18WhR0fckIGiWiSM5FcU1PY2jfGsTmX505Ub7P5Dz75Ygqrutd5tFrcqyPAtPTFDk8X1InxkkUwpP3nFU5o50DGhwQolGYKPGtQ-ZtmbOfcWQ",
      "kty": "RSA"
    }

    PEM

    -----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxwQ72P9z9OYshiQ+ntDY
    aPnnfwG6u9JAdLMZ5o0dmjlcyrvwQRdoFIKPnO65Q8mh6F/LDSxjxa2Yzo/wdjhb
    PZLjfUJXgCzm54cClXzT5twzo7lzoAfaJlkTsoZc2HFWqmcri0BuzmTFLZx2Q7wY
    Bm0pXHmQKF0V+C1O6NWfd4mfBhbM+I1tHYSpAMgarSm22WDMDx+WWI7TEzy2QhaB
    VaENW9BKaKkJklocAZCxk18WhR0fckIGiWiSM5FcU1PY2jfGsTmX505Ub7P5Dz75
    Ygqrutd5tFrcqyPAtPTFDk8X1InxkkUwpP3nFU5o50DGhwQolGYKPGtQ+ZtmbOfc
    WQIDAQAB
    -----END PUBLIC KEY-----


JWT Claims:
    VALID
```

## Resources

- https://github.com/panva/jose for JOSE
- https://github.com/panva/node-openid-client for the compliant issuer discovery
- https://github.com/sindresorhus for all the amazing packages we can all rely on ❤️
