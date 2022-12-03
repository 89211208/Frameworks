var http=require('http') // read built-in module

http.createServer((req,res)=>{
res.write("<b>This line has been instantiated from the server...</b>")
res.write("<div></div>User is in: " + req.url)
res.end()
}).listen(8000)
