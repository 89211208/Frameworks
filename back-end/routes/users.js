const express= require("express")
const users = express.Router();
const db = require("../db/conn")

users.post("/login", async(req, res)=>{
    let [username, password] = req.body
    let isUserComplete = username && password
    if (isUserComplete) {
        try {
            let queryResult = await db.authUser(username)
            if (queryResult.length > 0) {
                if (password === queryResult[0].user_password){
                    console.log(queryResult)
                }else{
                    console.log("INCORRECT PASSWORD")
                }
            }else{
                console.log("USER NOT REGISTERED")
            }
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }else{
        console.log("Please enter username and password.")
    }
    res.end()
})

users.post("/register",async(req, res)=>{
    let username = req.body.username
    let password = req.body.password
    let email = req.body.email
    let isUserComplete = username && password && email
    if (isUserComplete){
        try {
            let queryResult = await db.addUser(username, email, password)
            if (queryResult.affectedRows){
                console.log("New user added!")
            }
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }else{
        console.log("A field is missing...")
    }
    res.end()
})

module.exports = users