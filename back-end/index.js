const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()

const port = 5000

app.get("/",(req,res)=>{
    res.send("This text must be changed to a static file")
})

//Import opur custom modules-controllers
const novice= require("./routes/novice")
//Routes
app.use('/novice', novice);

///App listening on port
app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})