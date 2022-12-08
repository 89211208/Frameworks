var http = require('http')

http.createServer((req, res) => {
    res.write("<h1>This line has been instantiatsdged from the server</h1>")
    res.write("\n User ias in: " + req.url)
    res.end()
}).listen(5005)