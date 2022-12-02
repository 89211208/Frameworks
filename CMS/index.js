const express = require('express')      //constant are those variables how are
const app = express()
const port = 5001

app.get("/",(req,res)=>{
    res.send("Hola muchachos a...")
})
app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
    })