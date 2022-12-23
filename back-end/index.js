const express = require('express')
const cors = require("cors")
require("dotenv").config()

const app = express()

const port = 5025


app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:["http://88.200.63.148:3025"],
    methods:["GET", "POST"],
    credentials:true
  }))
  

app.get("/",(req,res)=>{
res.send("hola TEST STARIII")
})

///App listening on port
app.listen(process.env.PORT || port, ()=>{
console.log(`Server is running on port: ${process.env.PORT || port}`)
})

const novice= require("./routes/novice")
//Routes
app.use('/novice', novice);
