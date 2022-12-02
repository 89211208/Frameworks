var http = require("http")

http.createServer((req,res)=>{
    res.write("This line was created from the server")
    res.end()
}).listen(8050)