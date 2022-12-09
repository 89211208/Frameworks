const express = require('express')
require("dotenv").config()
const app = express() //framework that makes working with https requests easier
const port = 5052
const novice = require("./routes/novice")

app.get("/",(request, response)=>{
    response.send("Hello this is Tino.")
})

app.use("/novice", novice)

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})