const express = require("express");
const novice = require("./routes/novice");
require("dotenv").config();

const app = express();

const port = 3000;

app.use("/novice", novice);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
