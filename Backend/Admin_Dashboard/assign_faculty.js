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

const assign_faculty = app.post("/", (req, res) => {

    const course_code = req.body.course_code;
    const section = req.body.section;
    const faculty_email = req.body.faculty_email;
    const faculty_initial = req.body.faculty_initial;
    const semester = req.body.semester;
    console.log(course_code);
    console.log(req.body.section);
    console.log(semester);
    console.log(faculty_email);
    console.log(faculty_initial);
    const query = `
                    UPDATE course_details
                    SET 
                         faculty_email = ?,
                         faculty_initial = ?
                     WHERE 
                         course_code = ? AND 
                         section = ? AND 
                         semester = ?
                    `;

const values = [
    faculty_email,
    faculty_initial,
    course_code, 
    section, 
    semester
];

connection.query(query, values, (err, result) => {
   if(err) throw err;
   //console.log(result);
});


});

module.exports = app;