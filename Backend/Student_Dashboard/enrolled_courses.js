const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eims",
});

const enrolled_courses = app.post("/", (req, res) => {
  const email = req.body.email;

  console.log(req.body);
  const query = `
                    SELECT course_code, semester, section
                    FROM enrolled_list
                    WHERE
                         email = ?
                    `;

  connection.query(query, [email], (err, result) => {
    if (err) res.send(err);
    res.json(result);
  });
});

module.exports = app;
