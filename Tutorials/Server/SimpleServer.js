var http = require('http');

http.createServer((request, respond)=>{
    respond.write("<h1>This has been created from the server..</h1>")
    respond.write("\nUser is in: "+request.url)
    respond.end()
}).listen(8000)