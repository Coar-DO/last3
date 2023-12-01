const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "mysql-service",
  user: "root",
  password: "password",
  database: "numbers",
});

// Middleware to parse JSON
app.use(bodyParser.json());

// Endpoint to handle number submission
app.post("/submit", (req, res) => {
  const number = req.body.number;

  // Insert the number into the MySQL database
  const sql = `INSERT INTO numbers (value) VALUES (${number})`;
  connection.query(sql, (err, result) => {
    if (err) throw err;

    console.log(`Number ${number} inserted into the database`);
    res.json({ success: true });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
