const express = require('express')

const app = express()

const port = 80

app.get("/", (req,res) => {
    res.send("RPC connection is live")
})

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})