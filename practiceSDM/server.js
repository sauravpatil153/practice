const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,resp){
    resp.sendFile("./public/form.html",{root:__dirname});
});

app.post("/submit",function(req,resp){
    var connection = req.body.iconnection
    var computer = req.body.comptype;
    resp.send("<h1>DATA RECEIVED</h1><p>"+connection+"<br>"+computer+"</p>");
});

app.listen(3000);

console.log("server chalu ahe");