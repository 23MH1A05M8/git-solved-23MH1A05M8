// server.js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🚀 DevOps Simulator is running successfully!");
});

app.listen(PORT, () => {
  console.log(`✅ Server started successfully on port ${PORT}`);
});
