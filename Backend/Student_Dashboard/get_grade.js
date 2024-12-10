//student will get grade based on their email

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

const get_grade = app.post("/", (req, res) => {
  const email = req.body.email;

  //console.log(req.body);
  const query = `
                    SELECT *
                    FROM grade_sheet
                    WHERE 
                         email = ?
                    `;

  connection.query(query, [email], (err, result) => {
    if (err) res.send(err);
    res.json(result);
    console.log("successful");
  });
});

module.exports = app;
