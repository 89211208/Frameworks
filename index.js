const express = require('express')
require('dotenv').config()

const app = express()

var http = require('http');

const port = 5000

const novice= require("./routes/novice")
//Routes
app.use('/novice', novice);

app.get("/",(req,res)=>{
res.send("hola")
})

///App listening on port
app.listen(process.env.PORT || port, ()=>{
console.log(`Server is running on port: ${process.env.PORT || port}`)
})


