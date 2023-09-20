const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: 200, message: "Hello Shanu! Docker CI/CD Done" });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
