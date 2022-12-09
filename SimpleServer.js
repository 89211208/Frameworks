const server = require('http')

server.createServer(function(req, res){
    res.write("<h1>Welcome</h1>")
    res.write("\nUser is in: " + res.url)
    res.end()

}).listen(8000)

