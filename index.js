const inquirer = require('inquirer');
const db = require('./db/server');



let mainPrompt= async()=>{
 const ans = await inquirer.prompt([{
        type:'list',
        name:'firstPrompt',
        message:'Choose your action',
        choices:['view all departments','view all roles','view all employees','add a department', 'add a role','add an employee','update an employee role']

    }])
  
        if(ans.firstPrompt ==='view all departments'){
        // console.log('You choose '+ans.firstPrompt)
        // db.query(`SELECT * FROM department`,(err,output)=>{

        // if(err) throw err;
        // console.log('Department are: ')
        // console.table(output);
       await mainPrompt();
            }
        else if(ans.firstPrompt === 'view all roles'){
            // console.log('You choose '+ans.firstPrompt)
            await mainPrompt();
        }

        else if(ans.firstPrompt === 'view all employees'){
           
            await mainPrompt();
        }

        else if(ans.firstPrompt === 'add a department'){
         await inquirer.prompt([{
            type:'input',
            name:'inputDepartment',
            message:'Input the name of department'
            }])
           
            await  mainPrompt();
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

         await mainPrompt();
        }

    else if (ans.firstPrompt === 'add an employee') {

        await inquirer.prompt([{
                type:'input',
                name:'inputEmployee',
                message:'Input the name of employee'
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
        


mainPrompt();