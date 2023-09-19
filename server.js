const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: 200, message: "Hello ppl" });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
