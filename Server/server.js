const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("\nUser is in: " + req.url);
    res.end("Hello World");
  })
  .listen(8000);
