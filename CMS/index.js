const express = require('express')
const app = express()
const port = 5010

app.get("/",(req,res)=>{
    res.send("cao :)")

})

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})