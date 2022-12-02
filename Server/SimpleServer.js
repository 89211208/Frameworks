var https = require("http")

https.createServer((req, res)=>{
    res.write("That line was created from the server TEST")
    res.write("\n User is in: " + req.url)
    res.end()
}).listen(8008)