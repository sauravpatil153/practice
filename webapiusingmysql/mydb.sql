CREATE DATABASE mydb;
USE mydb;

CREATE TABLE employees(
    empid INT,
    ename VARCHAR(30),
    sal DECIMAL(9,2)
);

INSERT INTO employees(empid,ename,sal) VALUES(1,"Saurav",50000),(2,"Ram",40000),
(3,"Sagar",150),(4,"Heisenberg",40000),(5,"Runesh",40000);
