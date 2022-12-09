var http = require('http')
const { default: test } = require('node:test')

http.createServer((req, res)=>{
    test.write("<h1>This has been created from server...</h1>")
    res.write("\nUser is in: " + req.url)
    res.end()

}).listen(8000)