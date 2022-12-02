var http=require('http')

http.createServer((req,res)=>{
    res.write("This line has been istantiated from server")
    res.write("\nUser is in:"+ req.url)
    res.end()
}).listen(8000)
