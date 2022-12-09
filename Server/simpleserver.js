var http = require('http'); 

http.createServer((req,res)=>{
    res.write("<h1>This line has been instantiated from the server...</h1>")
    res.wrrite("\nUser is in:" + req.url)
    res.end()
    }).listen(8032)



