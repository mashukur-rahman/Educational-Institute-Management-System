const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const mysql = require("mysql2");

const login = app.get("/", (req, res) => {
  console.log("Login requested");
  res.send("hello world");
});

module.exports = app;
