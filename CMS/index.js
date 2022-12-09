const express = require('express')

const app = express()

const port = 5030

app.get("/",(req,res)=>{
res.send("hello this is marko vranjes enrolment number 89211012")
})

///App listening on port
app.listen(process.env.PORT || port, ()=>{
console.log(`Server is running on port: ${process.env.PORT || port}`)
})


