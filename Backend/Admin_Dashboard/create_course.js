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

const create_course = app.post("/", (req, res) => {

    const course_code = req.body.course_code;
    const section = req.body.section;
    const course_name  = req.body.course_name;
    const description = req.body.description;
    const theory_room = req.body.theory_room;
    const theory_timing = req.body.theory_timing;
    const lab_room = req.body.lab_room;
    const lab_timing = req.body.lab_timing;
    const faculty_email = req.body.faculty_email;
    const faculty_initial = req.body.faculty_initial;
    const department = req.body.department;
    const semester = req.body.semester;
    const credit = req.body.credit;

    const query = `
    INSERT INTO course_details (
        course_code, section, course_name, description, 
        theory_room, theory_timing, lab_room, lab_timing, 
        faculty_email, faculty_initial, department, semester, credit,availability
    ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
    )
`;

const values = [
    req.body.course_code || null,
    req.body.section || null,           // Default in DB will take over if null
    req.body.course_name || null,
    req.body.description || null,
    req.body.theory_room || "N/A",
    req.body.theory_timing || "N/A",
    req.body.lab_room || "N/A",
    req.body.lab_timing || "N/A",
    req.body.faculty_email || "TBA",
    req.body.faculty_initial || "TBA",
    req.body.department || null,       // Default to 'General' if not provided
    req.body.semester || null,         // Default to 1 if not provided
    req.body.credit || null,            // Default to 0.0 if not provided
    "YES"
];

connection.query(query, values, (err, result) => {
   if(err) throw err;
   //console.log("Successful");
});


});

module.exports = app;