const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

let feedbacks = [];

// Middleware
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

// Start server (IMPORTANT FIX HERE)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
