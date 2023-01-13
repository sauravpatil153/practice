var express = require("express");
var app = express();
var mysql = require("mysql2");
var path = require("path");
var bodyparser = require("body-parser");
const { send } = require("process");
var cors = require("cors");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    port: "3306"
});

connection.connect(function (err) {
    if (err)
        throw err;
    console.log("connection succesfull");
});

connection.query("USE mydb", function (err, result) {
    if (err)
        throw err;
    console.log("database selected");
});

app.get("/", function (req, resp) {
    connection.query("SELECT * FROM employees", function (err, result) {
        if (err)
            throw err;
        resp.setHeader('Access-Control-Allow-Origin', '*');
        resp.send(result);
    });
});

app.get("/:empid", function (req, resp) {
    connection.query("SELECT * FROM employees WHERE empid=?", req.params.empid , function (err, result,) {
        if (err)
            throw err;
        resp.send(result);
    });
});

app.post("/employee", function (req, resp) {
    var empid = req.body.empid;
    var ename = req.body.ename;
    var sal = req.body.sal;
    connection.query("INSERT INTO employees(empid,ename,sal) VALUES(?, ?, ?)", [empid, ename, sal],
        function (err, result) {
            if (err)
                throw err;
            console.log("Insert Succesfull");
        });
});

app.put("/:empid", function (req, resp) {
    var empid = req.body.empid;
    var ename = req.body.ename;
    var sal = req.body.sal;
    connection.query("UPDATE employees SET empid=?,ename=?,sal=? WHERE empid=?",
        [empid, ename, sal, req.params.empid], function (err, result) {
            if (err)
                throw err;
            console.log("Update Succesfull");
        });
});

app.delete("/:empid", function(req, resp){
    connection.query("DELETE FROM employees WHERE empid=?",req.params.empid,
    function(err, result){
        if (err)
                throw err;
            console.log("Delete Succesfull");
    });
});

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.listen(4000);
console.log("server listening at port 4000");