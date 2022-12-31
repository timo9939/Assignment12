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
    var emp_id= await inquirer.prompt([{
        type:'input',
        name:'em_id',
        message:'Input the id of the employee'
    }])

    var first= await inquirer.prompt([{
                type:'input',
                name:'inputFirstName',
                message:'Input the first name of employee'
                }])

    var last=   await inquirer.prompt([{
                type:'input',
                name:'inputLastName',
                message:'Input the last name of employee'
                    }])
    var roleEmp=  await inquirer.prompt([{
                type:'input',
                name:'inputRole',
                message:'Input the role of employee'
                    }])
    var inpMan=    await inquirer.prompt([{
                type:'input',
                name:'inputManager',
                message:'Input the name of the manager'
        }])

        var addEmployee=[emp_id.em_id,first.inputFirstName,last.inputLastName,roleEmp.inputRole,inpMan.inputManager]
        db.query(`INSERT INTO employee (em_id,firstName,lastName,em_role,ManagerName) VALUES (?,?,?,?,?)`,addEmployee,(err)=>{
            if(err) throw err;
             mainPrompt();
        })
      
        }

        else if (ans.firstPrompt === 'update an employee role'){
            var updateByID= await inquirer.prompt([{
                type:'input',
                name:'upByID',
                message:'Input the employee ID to update the information'
            }])
            
            
            var update= await inquirer.prompt([{
                type:'list',
                name:'update_choice',
                message:'Choose the information that you want to update of the employee',
                choices:['First Name','Last Name','Role of Employee','Name of Manager']

            }])

            if(update.update_choice === 'First Name'){
            var upFirst= await inquirer.prompt([{
                type:'input',
                name:'update_fn',
                message:'Input the updated first name'
            }]);
            db.query(`UPDATE employee SET firstName =? WHERE em_id=?`,[upFirst.update_fn,updateByID.upByID],(err)=>{
                if(err) throw err;
                mainPrompt();
            })}

            else if(update.update_choice === 'Last Name'){
                var upLast= await inquirer.prompt([{
                    type:'input',
                    name:'update_ln',
                    message:'Input the updated last name'
                }]);
                db.query(`UPDATE employee SET lastName =? WHERE em_id=?`,[upLast.update_ln,updateByID.upByID],(err)=>{
                    if(err) throw err;
                    mainPrompt();
                })
            }
        
            else if(update.update_choice === 'Role of Employee'){
                var uprole= await inquirer.prompt([{
                    type:'input',
                    name:'update_re',
                    message:'Input the updated role of employee'
                }]);
                db.query(`UPDATE employee SET em_role =? WHERE em_id=?`,[uprole.update_re,updateByID.upByID],(err)=>{
                    if(err) throw err;
                    mainPrompt();
                })
            }
            else {
                var upManager= await inquirer.prompt([{
                    type:'input',
                    name:'update_man',
                    message:'Input the updated name of manager'
                }]);
                db.query(`UPDATE employee SET ManagerName =? WHERE em_id=?`,[upManager.update_man,updateByID.upByID],(err)=>{
                    if(err) throw err;
                    mainPrompt();
                })
            }
   
        }

        else {
        db.end()
        console.log('Exit Successful')
        }
    }
        


