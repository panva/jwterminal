#!/usr/bin/env node

const fire = require('js-fire')

const jose = {
  verify: require('./verify'),
  decrypt: require('./decrypt'),
};

fire(jose);
