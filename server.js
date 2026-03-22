const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

let feedbacks = [];

app.use(bodyParser.json());
app.use(express.static("public"));

// API to add feedback
app.post("/api/feedback", (req, res) => {
  const { name, message } = req.body;
  feedbacks.push({ name, message });
  res.json({ success: true });
});

// API to get feedback
app.get("/api/feedback", (req, res) => {
  res.json(feedbacks);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});