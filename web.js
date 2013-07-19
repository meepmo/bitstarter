var express = require('express');
var fs = require('fs');

var fileIn = "index.html";
var buf = new Buffer(50);
buf = fs.readFileSync(fileIn);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
