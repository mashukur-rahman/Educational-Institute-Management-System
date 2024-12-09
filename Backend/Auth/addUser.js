const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const mysql = require("mysql2");
const secret = require("../secret");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eims",
});

const addUser = app.post("/", (req, res) => {
  console.log(req.body);
  const qry = "insert into actor_list values (?,?,?,?)";
  connection.query(
    qry,
    [req.body.id, req.body.email, req.body.department, req.body.role],
    (err, result) => {
      console.log("result:", result);
      res.json(result);
    }
  );
});

module.exports = app;
