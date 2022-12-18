const mysql =require('mysql2');
const express=require('express')

const port=process.env.port || 3001;
const app=express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'employee_db'
})

module.exports=db;