const express = require("express");
require("dotenv").config;
const app = express();
const port = 5050;
const novice = require("./routes/novice");

app.get("/", (req, res) => {
  res.send("Gjore");
});

app.use("/novice", novice);

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
