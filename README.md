# 👨‍💻 👩‍💻

```console
npm i -g panva/jwterminal
```


```console
❯ pbpaste | jwt

Header:
    {
      "alg": "RS256",
      "typ": "JWT",
      "kid": "r1LkbBo3925Rb2ZFFrKyU3MVex9T2817Kx0vbi6i_Kc"
    }

Payload:
    {
      "sub": "foo",
      "nonce": "02049549ec3dc63524444f3c8ac3c5ba",
      "at_hash": "-t6FCvkma2RvBWtjaLb4OA",
      "aud": "2baH-UeLf_D0LcVJH3enB",
      "exp": 1562830488,
      "iat": 1562826888,
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
