CREATE DATABASE mydb;
USE mydb;

CREATE TABLE trainer(
    trainerid INT PRIMARY KEY,
    tname VARCHAR(30),
    taddress VARCHAR(30),
    gender VARCHAR(30),
    skill VARCHAR(30),
    qualification VARCHAR(30),
    contactno VARCHAR(30),
    doj VARCHAR(30)
);

INSERT INTO trainer VALUES (1,"Saurav","Mumbai","Male","Java","B.Tech","250440","05/09/2016"),
(2,"Ram","Barshi","Male","React","B.Tech","550405","07/01/2014"),
(3,"Runesh","Pune","Male","Java","B.Tech","245478","11/10/2016"),
(4,"Abhishek","Pune","Male","PHP","B.Tech","450584","02/11/2015");
