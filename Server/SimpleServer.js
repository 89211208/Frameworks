var http =require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html"})
    res.write("<h1>This line has been instantiated from the server...</h1>")
    res.write("\nUser is in: " + req.url)
    res.end()
    }).listen(8000)
    
    