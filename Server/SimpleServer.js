var http = require("http")

http.createServer((req, res)=>{
	res.write("This line has been... ")
	res.end()
}).listen(8002)
