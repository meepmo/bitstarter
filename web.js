#!/usr/bin/env node
var fs = require('fs');
var infile = "index.html";
var inString = fs.readFileSync(infile);

var buf = new Buffer(inString);
console.log(buf.toString());
