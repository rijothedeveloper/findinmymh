const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Hello World" });
});

module.exports = app;
