const express = require("express")
const app = express()
require("dotenv").config()
const port = 5011
const cors = require("cors")

const novice = require("./routes/novice")
const users = require("./routes/users")

//Some configurations
app.use(express.urlencoded({extended : true}));
app.use(cors({
  origin:["http://88.200.63.148:3011"],
  methods:["GET", "POST"],
  credentials:true
}))


app.get("/", (req, res)=>{
    res.send("Hola muchachos...")
})

app.use("/novice", novice)


app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT 
        || port}`)
})
