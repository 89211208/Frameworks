const express = require('express')
const app = express() //framework that makes working with https requests easier
const port = 5002

app.get("/",(request, response)=>{
    response.send("Hello this is Tino.")
})

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})