const express = require('express')
const novice = express.Router()

novice.get("/", (req,res)=>{
    console.log("The route has been reacked")
    res.send("novice")
})

module.exports = novice