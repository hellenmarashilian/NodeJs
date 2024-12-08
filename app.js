// Import required modules
const express = require("express");

// Initialize the Express app
const app = express();

// Define the route
app.get("/hello", (req, res) => {
  // Access the environment variable
  const user = process.env.USER_NAME || "Environment variable not set";
  res.send(`Environment variable is: ${user}`);
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
