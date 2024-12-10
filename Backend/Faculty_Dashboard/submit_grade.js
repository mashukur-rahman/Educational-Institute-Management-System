//faculty will submit grade

const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const mysql = require("mysql2");

const connection=mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'eims'
})

const submit_grade = app.post("/", (req, res) => {

    const course_code = req.body.course_code;
    const email = req.body.email;
    const semester = req.body.semester;
    const grade = req.body.grade;
    const grade_point = req.body.grade_point;
    const credit = req.body.credit;

    const query = `
    INSERT INTO grade_sheet (
        course_code, email, semester, grade, grade_point,credit
    ) VALUES (
        ?, ?, ?, ?, ?, ?
    )
`;

const values = [
   course_code,
   email,
   semester,
   grade,
   grade_point,
   credit
];

connection.query(query, values, (err, result) => {
   if(err) throw err;
   //console.log("Successful");
});


});

module.exports = app;