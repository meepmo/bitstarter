var express = require('express');
var fs = require('fs');

var fileIn = "index.html";
var buf = new Buffer();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = fs.readFileSync(fileIn);
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port + "\n" + buf.toString());
});
