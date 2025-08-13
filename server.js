// Import necessary modules
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const fs = require('fs');

// Initialize express app
const app = express();
const PORT = 3000;

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',   // Your MySQL username
  password: '',   // Your MySQL password
  database: 'mydb' // Database name
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err.message);
    return;
  }
  console.log('Connected to MySQL database');
});

// API endpoint to fetch all users from the 'users' table
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Serve a simple message at the root
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Initialize the database from `database.sql` if not already done
const initDatabase = () => {
  const sqlPath = path.join(__dirname, 'database', 'database.sql');
  const sql = fs.readFileSync(sqlPath, 'utf8');
  db.query(sql, (err) => {
    if (err) {
      console.error('Error initializing the database: ', err.message);
    } else {
      console.log('Database initialized successfully');
    }
  });
};

// Call the database initialization function
initDatabase();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
