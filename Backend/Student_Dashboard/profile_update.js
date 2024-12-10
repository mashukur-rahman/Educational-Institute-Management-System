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

const profile_update = app.post("/", (req, res) => {

    console.log(req.body);
    const semester = req.body.semester;
    const contact = req.body.contact;
    const address = req.body.address;
    const password = req.body.password;

    const updates = [];
    const values = [];

    if (semester !== '') {
        updates.push("semester = ?");
        values.push(semester);
    }
    if (contact !== '') {
        updates.push("contact = ?");
        values.push(contact);
    }
    if (address !== '') {
        updates.push("theory_timing = ?");
        values.push(address);
    }
    // updates.push("course_code = ?");
    // updates.push("section = ?");
    // updates.push("semester = ?");

    values.push(course_code);
    values.push(section);
    values.push(semester);

    console.log(updates);
    console.log(values);
    const query = `
                    UPDATE course_details 
                    SET ${updates.join(", ")} 
                    WHERE
                        course_code = ? AND
                        section = ? AND
                        semester = ?;
                    `;

    connection.query(query, values, (err, result) => {
        if(err) throw err;
        console.log(result);
    });


});

module.exports = app;