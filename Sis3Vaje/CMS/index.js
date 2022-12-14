const express = require("express")
const app =  express()
require("dotenv").config()
const port = 5001

// Routes
const novice = require("./routes/novice")

app.get("/", (req, res)=> {
    res.send("Holaa")

})

app.use("/novice", novice)

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})
