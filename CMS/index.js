const express = require('express')      //constant are those variables how are

require("dotenv").config()

const app = express()
const port = 5052
const novice = require("./routes/novice")

app.get("/",(req,res)=>{
    res.send("Hola muchachos a...")
})

app.use("/novice",novice)

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
    })

    //this is for running the server