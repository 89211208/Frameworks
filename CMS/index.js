const express = require("express")
const app = express()
const port = 1337

app.get("/", (req, res)=>{
	res.send("Hola, opaaaalaaaa")
})

app.listen(process.env.PORT || port, ()=>{
	console.log(`Server is running on port: ${process.env.PORT || port}`)
})
