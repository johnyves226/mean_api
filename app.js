const express = require("express");
const app = express();
const mongoose = require('./database/db');


app.get("/", (req, res) => {
  res.json({ message: "Welcome to main api" });
});




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
