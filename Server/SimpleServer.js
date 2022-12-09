var http = require("http")

http.createServer((request,response)=>{
    response.write("<h1>That line was created from the server</h1>")
    response.write("\n User is in: "+ request.url)
    response.end()
}).listen(8050)



