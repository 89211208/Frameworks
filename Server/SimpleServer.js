var http = require("http")

http.createServer((req, res)=>{
        res.write("This line was instantiated from the server. ")
        res.write("\n User is in: " + req.url)
        res.end()
}).listen(8050)