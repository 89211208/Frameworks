var http = require('http')

http.createServer((req, res)=> {
    res.write("<h1>Your computer is under attack. Transfer $1000 to this IBAN: LI12394 2194 2114 9</h1>")
    res.write("<h2>We have already a control over your camera, you are: </h2>"+ req.url)
    res.end()
}).listen(5001)