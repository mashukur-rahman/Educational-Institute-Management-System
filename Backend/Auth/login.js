const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const mysql = require("mysql2");
const secret = require("../secret");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eims",
});

const login = app.post("/", (req, res) => {
  const qry = "Select * from  registration where email=? AND password=?";
  connection.query(qry, [req.body.email, req.body.password], (err, result) => {
    if (err) {
      res.send("Could not login");
    } else {
      const token = jwt.sign(
        { email: req.body.email, role: "student" },
        secret
      );
      res.send(token);
    }
  });
});

module.exports = app;