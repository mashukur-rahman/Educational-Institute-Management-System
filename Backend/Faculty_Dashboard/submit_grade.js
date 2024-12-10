//faculty will submit grade

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

const submit_grade = app.post("/", (req, res) => {
  const code = req.body.formData.course_code;

  const email = req.body.formData.email;
  const semester = req.body.formData?.semester;
  const grade = req.body.formData.grade;
  const grade_point = req.body.formData.grade_point;
  const credit = req.body.formData.credit;
  console.log(req.body);
  const query = `
      INSERT INTO grade_sheet (
           email, course_code, semester, grade, grade_point,credit
      ) VALUES (
          ?, ?, ?, ?, ?, ?
      )
  `;

  connection.query(
    query,
    [email, code, semester, grade, grade_point, credit],
    (err, result) => {
      if (err) {
        res.send("error");
        console.log(err);
      } else {
        res.send("successful");
      }
    }
  );
});

module.exports = app;
