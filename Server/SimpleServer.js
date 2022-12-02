var https = require("http")

https.createServer((req, res)=>{
    res.write("That line was created from the server")
    res.end()
}).listen(8008)