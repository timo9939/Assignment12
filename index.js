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
        choices:['view all departments','view all roles','view all employees','add a department', 'add a role','add an employee','update an employee role','exit']

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
        var deptInfo = await inquirer.prompt([{
            type: 'input',
            name: 'inputDepartment',
            message: 'Input the name of department'
        }])

        console.log(deptInfo);
        // console.log(ans.de_name);
       
        const sql1=`INSERT INTO department (de_name) VALUES (?)`;

        db.query(sql1, deptInfo.inputDepartment,(err)=>{
            if(err) throw err;
            console.log('New Department added');
           mainPrompt();  
        })
       
    }

    else if (ans.firstPrompt === 'add a role'){
       var title= await inquirer.prompt([{
                type:'input',
                name:'titleRole',
                message:'Input the name of title'
                }])
      var salary=  await inquirer.prompt([{
            type:'input',
            name:'inputSalary',
            message:'Input the salary'
        }])
        var dep_role =await inquirer.prompt([{
            type:'input',
            name:'inputDepRole',
            message:'Input the department of the role'
        }])

        var dataToInsert = [title.titleRole, salary.inputSalary, dep_role.inputDepRole]

        db.query(`INSERT INTO role (title,salary,dRole) VALUES (?,?,?)`, dataToInsert,(err)=>{
            if(err) throw err;
             mainPrompt();
    
        })
            
         
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

        else if (ans.firstPrompt === 'update an employee role'){
            // ask the user which role they want to update
            await inquirer.prompt([{
                    type:'input',
                    name:'updateRole',
                    message:'select the employee to update'
            }]);

            // ask the user what column they want to update

            // ask the user what info they want in the col(s)

            // update the role w/ the dbquery function

            // call main prompt
            await mainPrompt();
        }

        else {
        db.end()
        console.log('Exit Successful')
        }
    }
        


