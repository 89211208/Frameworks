var http = require('http')

http.createServer((req, res)=>{
    res.write("This line has been instantiated from the server...")
    res.end()
})