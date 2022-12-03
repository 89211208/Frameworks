var http =require('http'); // read buil-in module

http.createServer((req,res)=>{
    //res.write("This line has been creted TEST from the server...")
    res.writeHead(200,{"Content-Type": "text/html"})
    res.write("<h1>This line has been instantiated from the server...</h1>")
    res.write("\nUser is in: " + req.url)
    res.end()
    }).listen(8000)
    