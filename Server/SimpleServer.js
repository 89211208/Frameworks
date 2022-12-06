var http = require("http")

http.createServer((req, res)=>{
    res.write("This line has been instantiated from the server - 89211306")
    res.write("\n User is in space: " + req.url )
    res.end()
}).listen(8009)