var http = require('http')

http.createServer(function (req, res) {
  res.end('foobar');
}).listen(3000);