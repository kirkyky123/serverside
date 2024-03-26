const express = require("express");
const app = express();
const fs = require("fs")
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
  console.log(`running`);
});
