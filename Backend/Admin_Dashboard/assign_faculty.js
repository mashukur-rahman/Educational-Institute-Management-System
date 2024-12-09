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

const enroll_list = app.post("/", (req, res) => {
    const course_code = req.body.course_code;
    const query = `
                    SELECT
                        student.student_id,
                        student.name,
                        student.email,
                        enrolled_list.course_code,
                        enrolled_list.semester
                    FROM 
                        student
                    INNER JOIN 
                        enrolled_list
                    ON 
                        student.student_id = enrolled_list.student_id
                    WHERE 
                        enrolled_list.course_code = ?
                    `;
    
    connection.query(query, [course_code], (err, results) => {
        if (err) throw err;
        console.log(results);
        res.json(results);
    });               
});

module.exports = app;