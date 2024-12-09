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

const delete_course = app.post("/", (req, res) => {

    const course_code = req.body.course_code;
    const section = req.body.section;
    const semester = req.body.semester;

    const query = `
                    DELETE FROM course_details
                    WHERE 
                        course_code = ? AND 
                        section = ? AND 
                        semester = ?
                    `;


    const values = [
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