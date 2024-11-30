const express = require("express");
const path = require("path");

// Use the PORT provided by Heroku, or default to 3000 for local development
const PORT = process.env.PORT || 3000;
const app = express();

// Serve static files from the Vite build folder (dist)
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all route to serve the Vite frontend for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
