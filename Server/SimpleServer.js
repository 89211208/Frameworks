var http = require('http') // import http

http.createServer((req, res)=> { // anonimna funkcija, req-request, res - response
//    res.write("This line has been instantiated from the server...")
    res.write("<h1>This line has been instantiated from the server...</h1>")
    res.write("\n User is in in: " + req.url) // katero stran zeli req
    res.end()
}).listen(8001) // poslusaj temu prikljucku