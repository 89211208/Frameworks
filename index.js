const express = require("express")
const app = express()
const port = 5002

app.get("/", (req, res)=>{
	res.send("Hola muchacos.. ")
})

app.listen(process.env.PORT || port, ()=>{
	console.log(Server is running ))
