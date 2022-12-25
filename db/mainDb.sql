DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
    id INTEGER PRIMARY KEY,
    name VARCHAR(30)
);

create TABLE role(
    id INTEGER PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    dRole VARCHAR(30)
);

CREATE TABLE employee(
    em_id INTEGER PRIMARY KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    em_role VARCHAR(30) NOT NULL,
    ManagerName VARCHAR(30)
);