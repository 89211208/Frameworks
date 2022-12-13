const express = require("express")
const app = express()
const port = 5062

const novice = require("./routes/novice")

app.get("/", (req, res)=>{
    res.send("Hola muchachos...")
})

app.use("/novice", novice)

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT 
        || port}`)
})
