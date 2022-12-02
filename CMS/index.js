const express = require("express");
const app = express();
const port = 5032

app.listen(port)
app.get("/",(request, response) => {
	response.send("Hehe TOP G")
})