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
    <h2>Restaurant Recommendation</h2>
    <form action="/recommend">
      <input name="meal" placeholder="Enter favorite meal" />
      <button type="submit">Recommend</button>
    </form>
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
