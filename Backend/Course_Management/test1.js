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

const test1 = app.post("/", (req, res) => {

    const query = `
                   SELECT * FROM course_resources
                    `;


    connection.query(query, (err, result) => {
    if(err) throw err;
    console.log(result);
    console.log("link inserted");
    //console.log(result);
    });


});

module.exports = app;