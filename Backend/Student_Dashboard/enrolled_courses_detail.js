//details  of courses give a student email
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

const enrolled_courses_detail = app.post("/", (req, res) => {
  const email = req.body.email;
    
    //console.log(req.body);
    const query = `
                    SELECT
                        course_details.course_code,
                        course_details.section,
                        course_details.course_name,
                        course_details.theory_room,
                        course_details.theory_timing,
                        course_details.lab_room,
                        course_details.lab_timing,
                        course_details.faculty_email,
                        course_details.faculty_initial,
                        course_details.semester
                    FROM 
                        course_details
                    INNER JOIN 
                        enrolled_list
                    ON 
                        course_details.course_code = enrolled_list.course_code
                    WHERE 
                        enrolled_list.email = ?
                    `;

  connection.query(query, [email], (err, result) => {
    if (err) res.send(err);
    res.json(result);
  });
});

module.exports = app;
