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

const enroll = app.post("/", (req, res) => {

    const course_code = req.body.course_code;
    const semester = req.body.semester;
    const section = req.body.section;
    const email = req.body.email;
    
    console.log(req.body);
    const query = `
                    INSERT INTO enrolled_list (
                        course_code, semester, section, email
                    ) VALUES(
                        ?,?,?,?
                    )
                    `;


    connection.query(query, [course_code, semester, section, email], (err, result) => {
        if(err) res.send("Duplicate enry");
        console.log("Enrolled");

    });


});

module.exports = app;