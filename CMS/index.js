<<<<<<< HEAD
const express = require("express")
const app = express()
require("dotenv").config()
const port = 5051

const cookieParser=require("cookie-parser")

app.use(express.urlencoded({extended : true}));
app.use(cookieParser("somesecret"))

const novice = require("./routes/novice")
const users = require("./routes/users")
const cors=require("cors")

app.get("/", (req, res)=>{
    res.send("Hola muchachos...")
})

app.use("/novice", novice)


app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT 
        || port}`)
})
app.use(express.urlencoded({extended : true}));
app.use(cors({
    origin:["http://88.200.63.148:3000"],
    methods:["GET", "POST"],
    credentials:true
}))
=======
const express = require('express')
const app = express()
const port = 5013

app.get("/",(req,res)=>{
    res.send("Receba obrigado deus")
})

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})
>>>>>>> 14b7f5ed5c1561970241887f027e4a90d5976772
