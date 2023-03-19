const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3000;

//TODO: Make a pool for subsequent connections to MYSQL

//Enables single connection to MYSQL Database
const sqlDB = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

//Error Handling for MYSQL Database Connection
sqlDB.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to Database");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//"/login" route configuration
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  sqlDB.query(sql, (err, data) => {
    if (err) {
      throw err;
    }
    if (data.length === 0) {
      res.send("Invalid Credentials");
      return;
    }
    const token = jwt.sign({ username }, "secret");
    res.send({ token });
  });
});

//"/register route configuration"
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;

  sqlDB.query(sql, (err, data) => {
    if (err) {
      res.send("Registration failed");
      return;
    }
    res.send("Registration successful");
  });
});

//"/posts" route configuration
app.get("/posts", (req, res) => {
  const sql = `SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id`;

  sqlDB.query(sql, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

//"/posts/:userId" route configuration
app.get("/posts/:userId", (req, res) => {
  const userId = req.params.userId;
  const sql = `SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id WHERE user_id = ${userId}`;

  sqlDB.query(sql, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

//"/posts/new" route configuration
app.post("/posts/new", (req, res) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.json({ message: "No authorisation token" });
  }

  try {
    const decodeToken = jwt.verify(token, "secret");
    const userId = decodeToken.id;

    const { title, content } = req.body;

    if (!title || !content) {
      return res.send("Post Details Required");
    }

    const post = { title, content, user_id: userId };
    sqlDB.query("INSERT INTO posts SET", post, (err) => {
      if (err) {
        return res.send("Failed");
      }

      return res.json({ message: "Success" });
    });
  } catch (err) {
    return res.send("Invalid Token");
  }
});

app.listen(port, () => {
  console.log("Server started on port 3000");
});
