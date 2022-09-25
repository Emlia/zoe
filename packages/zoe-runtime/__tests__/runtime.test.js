'use strict';

const runtime = require('..');
const assert = require('assert').strict;

assert.strictEqual(runtime(), 'Hello from runtime');
console.info("runtime tests passed");
