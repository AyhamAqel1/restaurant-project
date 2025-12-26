CREATE DATABASE IF NOT EXISTS restaurant_db;
USE restaurant_db;

CREATE TABLE IF NOT EXISTS restaurants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  meal VARCHAR(100)
);

INSERT INTO restaurants (name, meal) VALUES
('Pizza House', 'pizza'),
('Burger King', 'burger'),
('Sushi Time', 'sushi');
