var http = require("http")

http.createServer((req, res)=>{
    res.write("Nekaj sem napisala, da vidim ce dela.")
    res.write("\n User is in: " + req.url)
    res.end()
}).listen(8007)