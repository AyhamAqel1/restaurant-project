const express = require("express");
const mysql = require("mysql2");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "appuser",
  password: "app123",
  database: "restaurant_db"
});
app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Restaurant App</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f4f6f8;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .card {
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        text-align: center;
      }
      input {
        padding: 10px;
        width: 200px;
        margin-bottom: 15px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }
      button {
        padding: 10px 20px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background: #0056b3;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h2>🍽️ Restaurant Recommendation</h2>
      <form action="/recommend">
        <input name="meal" placeholder="Enter favorite meal" />
        <br/>
        <button type="submit">Recommend</button>
      </form>
    </div>
  </body>
  </html>
  `);
});
app.get("/recommend", (req, res) => {
  const meal = req.query.meal;
  db.query(
    "SELECT name FROM restaurants WHERE meal = ?",
    [meal],
    (err, results) => {
      if (results.length > 0) {
        res.send("Recommended Restaurant: " + results[0].name);
      } else {
        res.send("No restaurant found");
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
