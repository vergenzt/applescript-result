#!/usr/bin/env node

const applescriptResult = require('./index');
const fs = require('fs');

const input = fs.readFileSync(0).toString();
console.log(JSON.stringify(applescriptResult(input)));