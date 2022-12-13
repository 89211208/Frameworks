const express = require("express")
const novice = express.Router()
const DB = require("../DB/dbConn")

novice.get("/", (req, res) => {
    console.log("the route has been reaced")
    res.send("novice")

})

novice.get("/", async (req,res,next)=>{
    try{
        let queryResult = await DB.allNovice()
        res.json(queryResult)
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = novice


