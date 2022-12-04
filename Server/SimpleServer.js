var http = require("http")

http.createServer((req,res)=>{
    res.write("<h1>this line was created from the quaphone</h1>")
    res.write("\n User is in: "  + req.url)
    res.end()
}).listen(8050)