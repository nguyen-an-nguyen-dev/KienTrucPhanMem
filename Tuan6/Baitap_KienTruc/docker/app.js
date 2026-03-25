const http = require("http");

http.createServer((req, res) => {
  res.end("Hello Food App");
}).listen(3000);