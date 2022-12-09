const express = require("express");
const app = express();
const port = 5032
const novice = require("./routes/novice")

app.get("/",(request, response) => {
	response.send("Hehe TOP G")
})

aapp.use('/novice', novice);

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
    })