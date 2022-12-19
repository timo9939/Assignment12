const inquirer=require('inquirer');
const db = require('./db/server');


let mainPrompt=()=>{
 inquirer.prompt([{
        type:'list',
        name:'firstPrompt',
        message:'Choose your action',
        choices:['view all departments','view all roles','view all employees','add a department', 'add a role','add an employee','update an employee role']

    }])
    .then((ans)=>{
        if(ans.firstPrompt ==='view all departments'){
        console.log('You choose '+ans.firstPrompt)
        // db.query(`SELECT * FROM department`,(err,output)=>{
                
        // if(err) throw err;
        // console.log('Department are: ')
        // console.table(output);
        mainPrompt();
            }
        else if(ans.firstPrompt === 'view all roles'){
            console.log('You choose '+ans.firstPrompt)
            mainPrompt();
        }

        else if(ans.firstPrompt === 'view all employees'){
           
            mainPrompt();
        }

        else if(ans.firstPrompt === 'add a department'){
            inquirer.prompt([{
            type:'input',
            name:'inputDepartment',
            message:'Input the name of department'
            }])
           
            mainPrompt();
        }

        else if(ans.firstPrompt === 'add a role'){

            inquirer.prompt([{
                type:'input',
                name:'inputRole',
                message:'Input the name of role'
                }])

            mainPrompt();
        }

        else if(ans.firstPrompt === 'add an employee'){

            inquirer.prompt([{
                type:'input',
                name:'inputEmployee',
                message:'Input the name of employee'
                }])

            mainPrompt();
        }

        else{

            inquirer.prompt([{
                type:'input',
                name:'updateRole',
                message:'select the employee to update'
                }])

            mainPrompt();
        }
    })
        } 
//     })
// }

mainPrompt();