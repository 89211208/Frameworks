const express = require("express")
const novice = require("./routes/novice");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config()

const app = express()

const port = 5002

app.use("/novice", novice)


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("somesecret"));
app.use(
  cors({
    origin: ["http://88.200.63.148:5002"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);


// Routes 

app.get("/", (req,res)=>{
    res.send("hola")
})


app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})