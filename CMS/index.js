const express = require('express')
require('dotenv').config()
const app = express()
const port = 5038
const novice = require("./routes/novice")

app.get("/",(req,res)=>{
    res.send("cao :)")
})

app.use("/novice", novice)

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})