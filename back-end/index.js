const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()

const port = 5000

const users = require("./routes/users")

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({
    methods:["GET","POST"]
}))

app.use("/users", users)

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