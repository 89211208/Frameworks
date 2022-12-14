const express = require("express")
const app = express()

//const a = require("dotenv")
//a.config

require("dotenv").config()
const port = 5002

// Routes 
const novice = require("./routes/novice")

app.get("/", (req,res)=>{
    res.send("hola")
})

app.use("/novice", novice)

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})