const express = require("express");
const cors = require("cors");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { auth, SECRET } = require("./middleware");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = "./data.json";

// Helper
function readData() {
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// 🔐 REGISTER
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  let data = readData();

  const hashed = await bcrypt.hash(password, 8);
  data.users.push({ username, password: hashed });

  writeData(data);
  res.send("User registered");
});

// 🔐 LOGIN
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let data = readData();

  const user = data.users.find(u => u.username === username);
  if (!user) return res.status(400).send("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).send("Wrong password");

  const token = jwt.sign({ username }, SECRET);
  res.json({ token });
});

// 📋 GET TASKS
app.get("/tasks", auth, (req, res) => {
  let data = readData();
  const userTasks = data.tasks.filter(t => t.username === req.user.username);
  res.json(userTasks);
});

// ➕ ADD TASK
app.post("/tasks", auth, (req, res) => {
  let data = readData();

  const task = {
    id: Date.now(),
    username: req.user.username,
    text: req.body.text,
    completed: false
  };

  data.tasks.push(task);
  writeData(data);

  res.json(task);
});

// ✅ TOGGLE TASK
app.put("/tasks/:id", auth, (req, res) => {
  let data = readData();

  const task = data.tasks.find(t => t.id == req.params.id);
  if (task) task.completed = !task.completed;

  writeData(data);
  res.send("Updated");
});

// ❌ DELETE TASK
app.delete("/tasks/:id", auth, (req, res) => {
  let data = readData();

  data.tasks = data.tasks.filter(t => t.id != req.params.id);
  writeData(data);

  res.send("Deleted");
});

// 🚀 START
app.listen(5000, () => {
  console.log("Backend running on port 5000");
});