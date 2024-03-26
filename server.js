const express = require("express");
const app = express();
const fs = require("fs");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static("public"));

const craftsData = fs.readFileSync("crafts.json", "utf8");
const crafts = JSON.parse(craftsData);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/crafts", (req, res) => {
  res.json(crafts);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
