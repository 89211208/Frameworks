var http=require('http');
http.createServer((req,res)=>{
    res.write("<h1>That line has been instantiated from the server...</h2>")
    res.write("\nUser is in:"+req.url)
    res.end()
    }).listen(8008)
 