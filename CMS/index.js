const express = require('express')
const app = express()
const port = 5013

app.get("/",(req,res)=>{
    res.send("Receba obrigado deus")
})

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})