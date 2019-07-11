#!/usr/bin/env node

const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const { JWE, JWKS } = require('@panva/jose');
const getStdin = require('get-stdin');
const hardRejection = require('hard-rejection');

(async () => {
  const token = (await getStdin()).trim();
  const keystore = JWKS.asKeyStore(JSON.parse(await readFile(process.argv[2])));
  console.log(JWE.decrypt(token, keystore).toString());
})().catch((err) => {
  console.log(`${err.name}: ${err.message}`);
  process.exit(1);
})
