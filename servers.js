var http =require('http'); // read buil-in module
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html"})
    res.write("<h1>This line has been instantiated from the server...</h1>")
    res.end()
    }).listen(8000)