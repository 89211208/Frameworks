//Basic packages
const express = require('express')
const cors=require("cors")
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

//Some configurations
app.use(express.urlencoded({extended : true}));
app.use(cors({
  origin:["http://88.200.63.148:3000"],
  methods:["GET", "POST"],
  credentials:true
}))


app.get("/",(req,res)=>{
    res.send("Henlo")
}
)

//app should listen 
app.listen(process.env.PORT||port,()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})

