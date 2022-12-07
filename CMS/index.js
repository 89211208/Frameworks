const express = require("express")
const app = express()
require("dotenv").config
const port = 5007
// const novice = express.Router()

// Routes
const novice = require("./routes/novice") // require == import

app.use("/novice", novice)

app.get("/", (req, res)=>{
    res.send("hola")
})

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})