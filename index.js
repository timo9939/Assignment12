// const mysql =require('mysql2');
// const express=require('express')
// const inquirer=require('inquirer')

// const port=process.env.port || 3001;
// const app=express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const db=mysql.createConnection({

//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'employee_db'
// })
const inquirer=require('inquirer');
const db = require('./db/server');

const mainPrompt=()=>{
return inquirer.prompt([{
        type:'list',
        name:'firstPrompt',
        message:'Choose your action',
        choices:['view all departments',' view all roles','view all employees','add a department', 'add a role','add an employee','update an employee role']

    }]).then((ans)=>{
        if(ans.prompt ==='view all departments'){
        db.query(`SELECT * FROM department`,(err,output)=>{
                
        if(err) throw err;
        console.log('Department are: ')
        console.table(output);
        mainPrompt();
            })
        }
    })
}

// mainPrompt();