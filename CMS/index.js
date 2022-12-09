const express = require("express")
const app = express()
require('dotenv').config()

const port = 5018

const novice = require("./routes/novice")

app.use("/novice", novice)
app.get("/",(req,res)=>{
    res.send("Hola muchachos, Zdravo srcki")
})

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})
    
    