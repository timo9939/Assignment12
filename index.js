const inquirer=require('inquirer')
const db = require('./db/server')
constdb=require('./db/server')

db.connect(err=>{
    if (err) throw err;
    console.log('Connected to database');
})


let mainPrompt=function(){
    inquirer.prompt([{
        type:'list',
        name:'firstPrompt',
        message:'Choose your action',
        choices:['view all departments',' view all roles','view all employees','add a department', 'add a role','add an employee','update an employee role']

    }])
}

mainPrompt();