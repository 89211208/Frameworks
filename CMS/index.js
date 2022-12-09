const express = require("express")
require("dotenv").config()
const app = express()
const port = 5017

const novice = require("./routes/novice")

app.use("/novice",novice)

app.get("/",(req,res)=>{
    res.send("Thank you..Boi")
})

// App should listen 
app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})
