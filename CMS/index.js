const express = require("express")
const app = express()
require("dotenv").config()
const port = 5000
const cors=require('cors')

const novice = require("./routes/novice")
const users = require("./routes/users")

app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:['https://fvnw0d.csb.app/'],
    methods:['GET','POST',"OPTIONS", "HEAD"],
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
