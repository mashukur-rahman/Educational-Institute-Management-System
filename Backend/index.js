const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const mysql = require("mysql2");
const login = require("./Auth/login");
const enroll_list = require("./Admin_Dashboard/enroll_list");

const registration = require("./Auth/registration");
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

//routes
app.use("/api/login", login);
app.use("/api/registration", registration);
app.use("/api/enroll_list", enroll_list);
app.listen(3000, (req, res) => {
  console.log("Server listening at port 3000");
});
