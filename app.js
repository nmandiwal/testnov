const http = require('http');
var os = require("os");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hi there! I'm being served from " + os.hostname())
}).listen(3000, '0.0.0.0');