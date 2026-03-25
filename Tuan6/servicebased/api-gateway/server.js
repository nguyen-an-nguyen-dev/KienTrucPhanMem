const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const USER_SERVICE = "http://localhost:3001";

app.get("/users", async (req, res) => {
  const result = await axios.get(USER_SERVICE + "/users");
  res.json(result.data);
});

app.post("/users", async (req, res) => {
  await axios.post(USER_SERVICE + "/users", req.body);
  res.send("Added via gateway");
});

app.delete("/users/:id", async (req, res) => {
  await axios.delete(USER_SERVICE + "/users/" + req.params.id);
  res.send("Deleted via gateway");
});

app.listen(3000, () => console.log("Gateway running"));     