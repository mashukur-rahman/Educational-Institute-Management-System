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

const course_list = app.post("/", (req, res) => {

    const course_code = req.body.course_code;
    
    const query = `
                    SELECT * FROM course_details
                    WHERE
                        course_code = ?
                    `;


    connection.query(query, [course_code], (err, result) => {
        if(err) throw err;
        res.json(result);
        console.log("list returned");
        console.log(result);

    });


});

module.exports = app;