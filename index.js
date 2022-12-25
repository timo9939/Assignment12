const inquirer = require('inquirer');
const db = require('./db/server');

db.connect(err=>{
    if (err) throw err;
    console.log('Connected to the server.js');
    mainPrompt();
})

let mainPrompt= async()=>{
 const ans = await inquirer.prompt([{
        type:'list',
        name:'firstPrompt',
        message:'Choose your action',
        choices:['view all departments','view all roles','view all employees','add a department', 'add a role','add an employee','update an employee role']

    }])
  
        if(ans.firstPrompt ==='view all departments'){
        db.query(`SELECT * FROM department`,(err,output)=>{

        if(err) throw err;
        console.table(output);
       mainPrompt();
            })
        }
        else if(ans.firstPrompt === 'view all roles'){
            console.log('All roles are: ')
            db.query(`SELECT* FROM role`,(err,output)=>{
            
                if(err) throw err;
                console.table(output);
                mainPrompt();
            })
            
        }

        else if(ans.firstPrompt === 'view all employees'){
            console.log('All employees are: ')
            db.query(`SELECT * FROM employee`,(err,output)=>{

                if (err) throw err;
                console.table(output);
                mainPrompt();
            })
            
        }

        
    else if (ans.firstPrompt === 'add a department') {
        await inquirer.prompt([{
            type: 'input',
            name: 'inputDepartment',
            message: 'Input the name of department'
        }])
        await mainPrompt()
    }
    else if (ans.firstPrompt === 'add a role'){
        await inquirer.prompt([{
                type:'input',
                name:'inputRole',
                message:'Input the name of role'
                }])
        await inquirer.prompt([{
            type:'input',
            name:'inputSalary',
            message:'Input the salary'
        }])
        await inquirer.prompt([{
            type:'input',
            name:'inputDepRole',
            message:'Input the department of the role'
        }])

         await mainPrompt();
        }

    else if (ans.firstPrompt === 'add an employee') {

        await inquirer.prompt([{
                type:'input',
                name:'inputFirstName',
                message:'Input the first name of employee'
                }])

        await inquirer.prompt([{
                type:'input',
                name:'inputLastName',
                message:'Input the last name of employee'
                    }])
        await inquirer.prompt([{
                type:'input',
                name:'inputRole',
                message:'Input the role of employee'
                    }])
        await inquirer.prompt([{
                type:'input',
                name:'inputManager',
                message:'Input the name of the manager'
        }])

        await mainPrompt();
        }

        else{
        await inquirer.prompt([{
                type:'input',
                name:'updateRole',
                message:'select the employee to update'
                }])

        await mainPrompt();
        }
    }
        


