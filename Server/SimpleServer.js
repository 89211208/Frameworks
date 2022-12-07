var http = require('http')
const { listenerCount } = require('process')

http.createServer((req, res)=>{
    res.write("<h1>This time has been instatiated from the server..</h1>")
    res.write("\n User in in: " + req.url)
    res.end()
}).listen(8234)