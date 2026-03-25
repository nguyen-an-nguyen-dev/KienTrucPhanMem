const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./users.db");

// Tạo bảng users nếu chưa có
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT
  )`);
});

module.exports = db;    