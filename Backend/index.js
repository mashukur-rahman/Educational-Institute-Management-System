const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const login = require("./Auth/login");
const enroll_list = require("./Admin_Dashboard/enroll_list");
const create_course = require("./Admin_Dashboard/create_course");
const registration = require("./Auth/registration");
const assign_faculty = require("./Admin_Dashboard/assign_faculty");
const delete_course = require("./Admin_Dashboard/delete_course");
const edit_course = require("./Course_Management/edit_courses");
const course_resources = require("./Course_Management/course_resources.js");
const course_list = require("./Student_Dashboard/course_list");
//aaaaa
//comment
const addUser = require("./Auth/addUser");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eims",
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
//routes
app.use("/api/login", login);
app.use("/api/registration", registration);
app.use("/api/enroll_list", enroll_list);
app.use("/api/create_course", create_course);
app.use("/api/assign_faculty", assign_faculty);
app.use("/api/delete_course", delete_course);
app.use("/api/edit_course", edit_course);
app.use("/api/course_resources", course_resources);
app.use("/api/course_list", course_list);

app.listen(3000, (req, res) => {
  console.log("Server listening at port 3000");
});
