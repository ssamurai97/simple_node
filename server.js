const express = require("express");
const app = express();
const PORT = 7777
app.listen(PORT, () => {
  console.log("Server running on port 8080");
});

app.get("/health", (req, res, next) => {
  res.status(200).send("Hello!");
});

