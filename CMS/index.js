const express = require('express')
const app = express()
const port = 5003

app.get("/",(request,response)=>{
    response.send("hola muchachos..")
})

app.listen(process.env.PORT || port, ()=> {
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})