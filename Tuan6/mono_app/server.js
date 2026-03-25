const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database");
const app = express();

app.use(bodyParser.json());

// GET users
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) res.status(500).send(err.message);
    else res.json(rows);
  });
});

// POST add user
app.post("/users", (req, res) => {
  const { id, name } = req.body;
  db.run("INSERT INTO users(id, name) VALUES(?, ?)", [id, name], (err) => {
    if (err) res.status(500).send(err.message);
    else res.send("User added");
  });
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM users WHERE id = ?", [id], (err) => {
    if (err) res.status(500).send(err.message);
    else res.send("Deleted");
  });
});

app.listen(3000, () => console.log("Monolith server running with DB"));