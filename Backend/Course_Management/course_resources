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

const course_resources = app.post("/", (req, res) => {

    const course_code = req.body.course_code;
    const link  = req.body.link;
    const description = req.body.description;

    console.log(link);
    const query = `
                    INSERT INTO course_resources (course_code, resource_link, description)
                    VALUES (?, ?, ?);
                    `;


    const values = [
        course_code, 
        link, 
        description
    ];

    connection.query(query, values, (err, result) => {
    if(err) throw err;
    console.log("link inserted");
    //console.log(result);
    });


});

module.exports = app;