var express = require("express");
var app = express();
var mysql = require("mysql2");
var bodyparser = require("body-parser");
var cors = require("cors");
const { ErrorResponse } = require("@remix-run/router");

var connection = mysql.createConnection({
    "user": "root",
    "password": "root123",
    "port": "3307",
    "host": "localhost"
});

connection.connect(function (err) {
    if (err)
        throw err;
    console.log("Connection eshtabilished");
});

connection.query("USE mydb", function (err, result) {
    if (err)
        throw err;
    console.log("Database Selected");
});

app.get("/", function (req, resp) {
    connection.query("SELECT * FROM trainer", function (err, result) {
        if (err)
            throw err;
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.send(result);
    });
});


app.post("/", function (req, resp) {
    trainerid = req.body.trainerid;
    tname = req.body.tname
    taddress = req.body.taddress
    gender = req.body.gender
    skill = req.body.skill
    qualification = req.body.qualification
    contactno = req.body.contactno
    doj = req.body.doj
    connection.query("INSERT INTO trainer VALUES(?,?,?,?,?,?,?,?)", 
    [trainerid,tname,taddress,gender,skill,qualification,contactno,doj],
     function (err, result) {
        if (err)
            throw err;
        console.log("Insert Succesfull");
    });
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
app.use(function (req, resp, next) {
    resp.header("Access-Control-Allow-Origin", "*");
    resp.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    resp.header("Access-Control-Allow-Headers", "Content-Type");
    resp.header("Access-Control-Allow-Credentials", true);
    next();
});

app.listen(4000);
console.log("server listening at port 4000");