var express = require('express');
var fs = require('fs');

var inputFile = "index.html";
var buf = new Buffer();
var out = fs.readFileSync(inputFile);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	response.send(out.toString());
});

console.log(outtoString('utf-8'));

var port = process.env.PORT || 5000;
app.listen(port);
