-- Create the database
CREATE DATABASE IF NOT EXISTS mydb;

-- Use the newly created database
USE mydb;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  age INT NOT NULL
);

-- Insert sample data into the users table
INSERT INTO users (name, email, age) VALUES
('John Doe', 'john.doe@example.com', 25),
('Jane Smith', 'jane.smith@example.com', 30),
('Alice Brown', 'alice.brown@example.com', 22);
