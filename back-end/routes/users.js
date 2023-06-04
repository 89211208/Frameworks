const express= require("express")
const session = require("express-session")
const users = express.Router();
const db = require("../db/conn")

users.use(session({
    secret:"somesecret",
    resave:false, 
    saveUninitialized:false,
    cookies:{
        expires:60*2
    }
}))   

users.get("/login",(req, res)=>{
    if(req.session.user){
        res.send({
            logged:true,
            user:req.session.user
        })
    }else{
        res.send({logged:false})
    }
})

users.post("/login", async(req, res)=>{
    let username = req.body.username
    let password = req.body.password
    let isUserComplete = username && password
    if (isUserComplete) {
        try {
            let queryResult = await db.authUser(username)
            if (queryResult.length > 0) {
                if (password === queryResult[0].user_password){
                    console.log(queryResult[0])
                    req.session.user = queryResult[0]
                    res.json(queryResult[0].user_name)
                    console.log("SESSION VALID")
                }else{
                    console.log("INCORRECT PASSWORD")
                    res.sendStatus(403)
                }
            }else{
                console.log("USER NOT REGISTERED")
                res.sendStatus(403)
            }
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }else{
        console.log("Please enter username and password.")
        res.sendStatus(401)
    }
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