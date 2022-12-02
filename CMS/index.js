const express = require("express")
const app = express()
const port = 5080

app.get("/",(req,res)=>{
    res.send("Hola muchachos...")
})

app.listen(process.env.PORT || port, ()=>{
    console.log("Server is running on portsa:" + port)
})