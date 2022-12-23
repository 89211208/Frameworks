const express = require("express");
const app = express();
const port = 5032
const cors = require("cors")
require("dotenv").config()

const novice = require("./routes/novice")
const users = require("./routes/users")

app.use(express.urlencoded({extended : true}));
app.use(cors({
    origin:["88.200.63.148:3039"],
    methods:["GET", "POST"],
    credentials:true
}))

app.get("/",(request, response) => {
	response.send("Hehe TOP G")
})

app.use('/novice', novice);

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
    })