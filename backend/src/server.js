const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send('hiii');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
