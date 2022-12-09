
const express = require('express')
const app = express()
require("dotenv").config()

const port = 5052

//Configs
app.use(express.json())

//Import opur custom modules-controllers
const novice = require("./routes/novice")



const conn = require("./DB/dbConn")
const users = require("./routes/users")
app.get('/', (req, res)=>{
    res.send("hello")
    res.end()
})

//Routes
app.use('/novice', novice);
app.use('/users', users)

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})

