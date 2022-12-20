const express = require("express");
const app = express();
require("dotenv").config();
const port = 5070;

const novice = require("./routes/novice");
const users = require("./routes/users");

app.get("/", (req, res) => {
  res.send("Hola muchachos...");
});

app.use("/novice", novice);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port: ${process.env.PORT || port}`);
});
