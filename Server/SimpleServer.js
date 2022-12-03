var http=require('http') // read built-in module

http.createServer((req,res)=>{
res.write("<h1>This line has been instantiated from the server...</h1>")
res.end()
}).listen(8000)
