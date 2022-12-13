const express = require("express")
const app = express()
const port = 5058


//Import opur custom modules-controllers
const novice= require("./routes/novice")
//Routes
app.get("/", (req, res)=>{
    res.send("Hola muchachos...")
})

app.use('/novice', novice);

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT 
        || port}`)
})
