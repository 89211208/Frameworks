const express = require("express")
const app = express()
require(".env").config()
const port = 5077
const novice = require("./routes/novice")

app.get("/", (req, res)=>{
	res.send("Hola, opaaaalaaaa")
})

app.use("/novice", novice)

app.listen(process.env.PORT || port, ()=>{
	console.log(`Server is running on port: ${process.env.PORT || port}`)
})
