const express= require("express")
const novice = express.Router();

novice.get('/',(req,res)=>{
    console.log("The route has been reached")
    res.json({title:"Hola"})
})

module.exports=novice
