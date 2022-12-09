const express = require("express")
const exp = express()

const port = 5012
exp.get("/",(req,res)=>{
    res.send("Thank you..")
})

// App should listen 
exp.listen(process.env.PORT || port, ()=>{
    console.log('Server is running on port: ${process.env.PORT || port}')
})