const express=require("express")
const cors = require("cors")
require("dotenv").config()

const app=express()

const port=5020



const novice=require("./routes/novice")

app.use("/novice",novice)

app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:["http://88.200.63.148:3020"],
    methods:["GET","POST"],
    credentials: true
}))


app.get("/",(req,res)=>{
    res.send("Henlo")
}
)

//app should listen 
app.listen(process.env.PORT||port,()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})