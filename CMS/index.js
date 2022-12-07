const express = require ("express")
const app = express()
require("dotenv").config
const port = 5003 

//routes
const novice= require("./routes/novice")
//Routes

app.get("/", (req, res)=> {
    res.send("dej mi denar zdej takoj hahah")
})

app.use('/novice', novice);


app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})