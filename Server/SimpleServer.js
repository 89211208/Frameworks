var http = require('http') //importing smth that already exists

http.createServer((req,res)=>{
    res.write("<h1>This line has been instantiated from the server wee...</h1>")
    res.write("\nUser is in: "+ req.url)
    res.end()
}).listen(8003) //8000 is a port, we cannot deploy in the same port im 8003
    
