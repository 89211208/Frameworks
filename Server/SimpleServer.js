const { rename } = require('fs');
var http = require('http');

http.createServer((req,res)=>{
    res.write("This line has been instantiated from the server...")
    res.write("\nUser is in "+ren.url)
    res.end()
}).listen(8000)
    