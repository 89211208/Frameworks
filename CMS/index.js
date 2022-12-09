//Basic packages
const express = require('express')
require('dotenv').config()
const app = express()
const port = 5031

app.get("/",(req,res)=>{
res.send("hola")
})

///App listening on port
app.listen(process.env.PORT || port, ()=>{
console.log(`Server is running on port: ${process.env.PORT || port}`)
})
//Import opur custom modules-controllers
const novice= require("./routes/novice")
//Routes
app.use('/novice', novice);

