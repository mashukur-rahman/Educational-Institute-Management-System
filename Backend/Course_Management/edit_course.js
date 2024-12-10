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

const edit_course = app.post("/", (req, res) => {

    console.log(req.body);
    const course_code = req.body.course_code;
    const section = req.body.section;
    const semester = req.body.semester;

    const course_name = req.body.course_name;
    const credit = req.body.credit;
    const theory_timing = req.body.theory_timing;
    const theory_room  = req.body.theory_room;
    const lab_timing = req.body.lab_timing;
    const lab_room = req.body.lab_room;
    
    console.log(theory_timing);
    console.log(course_code);
    console.log(section);
    console.log(semester);
    console.log(lab_room);
    const updates = [];
    const values = [];

    if (course_name !== '') {
        updates.push("course_name = ?");
        values.push(course_name);
    }
    if (credit !== '') {
        updates.push("credit = ?");
        values.push(credit);
    }
    if (theory_timing !== '') {
        updates.push("theory_timing = ?");
        values.push(theory_timing);
    }
    if (theory_room !== '') {
        updates.push("theory_room = ?");
        values.push(theory_room);
    }
    if (lab_timing !== '') {
        updates.push("lab_timing = ?");
        values.push(lab_timing);
    }
    if (lab_room !== '') {
        updates.push("lab_room = ?");
        values.push(lab_room);
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