const express = require("express");
const db = require("./database");
const app = express();
app.use(express.json());

// GET users
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) res.status(500).send(err.message);
    else res.json(rows);
  });
});

app.post("/users", (req, res) => {
  if (Array.isArray(req.body)) {
    // Chuẩn bị statement insert nhiều user
    const stmt = db.prepare("INSERT INTO users(id, name) VALUES(?, ?)");

    req.body.forEach(u => {
      // Kiểm tra dữ liệu hợp lệ trước khi insert
      if (u.id && u.name) {
        stmt.run(u.id, u.name);
      }
    });

    stmt.finalize();
    res.send("Users added");
  } else {
    // Nếu chỉ 1 user
    const { id, name } = req.body;
    if (id && name) {
      db.run("INSERT INTO users(id, name) VALUES(?, ?)", [id, name], (err) => {
        if (err) return res.status(500).send(err.message);
        res.send("User added");
      });
    } else {
      res.status(400).send("Invalid data");
    }
  }
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM users WHERE id = ?", [id], (err) => {
    if (err) res.status(500).send(err.message);
    else res.send("Deleted");
  });
});

app.listen(3001, () => console.log("User service running with DB"));