const express = require("express");
const novice = require("./routes/novice");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

const port = 5075;

app.use("/novice", novice);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("somesecret"));
app.use(
  cors({
    origin: ["http://88.200.63.148:5075"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
