const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const path = require("path")
dotenv.config()

const port = 5000

const users = require("./routes/users")

app.use(express.static(path.join(__dirname, "build")))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}))



app.use("/users", users)
app.use(cookieParser("somesecret"))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

//Import opur custom modules-controllers
const novice= require("./routes/novice")
//Routes
app.use('/novice', novice);

///App listening on port
app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})