const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("testing");
});

app.get("/api/cakes", (req, res) => {
  const cakes = [
    "birthday cake",
    "red velvet cake",
    "orange cake",
    "cheese cake",
  ];
  res.send(cakes);
});

app.listen(3000, () => {
  console.log("listening");
});
