// need to be able to get the user input from terminal
const inquirer = require("inquirer");
const db = require("./db");
// need express
const express = require("express");
const Choices = require("inquirer/lib/objects/choices");
const { response } = require("express");
const app = express();
const port = process.env.port || 8080;

//departments finance, scheduling, human resource

// finance roles[data entry, accounting]
//scheduling[schedulers]
//accounting[account1, accounting2]

// 2 managers per department

// * Update employee managers

//   * View employees by manager

//   * Delete departments, roles, and employees

//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

// Add departments, roles, employees

//Create an employee

//   * View departments, roles, employees

//   * Update employee roles

async function prompt() {
	 let responseDone = ""

	 try{ 
		 
		 let response = await inquirer
		.prompt([
			{
				type: "list",
				name: "user_choice",
				message: "What do you want to do? ",
				choices: ["Add a new employee?",
				"Delete an employee?",
				"View all employees?"
			]
			},
		
		])
		console.log(response)
		
			newEmployee = ""
			getNewEmployee = {}

			if (response.user_choice === "Add a new employee?") {
				newEmployee =
				
					await inquirer.prompt([
						{
							type: "input",
							name: "employee_firstname",
							message: "Enter employees first name: ",
						},
						{
							type: "input",
							name: "employee_lastname",
							message: "Enter employees last name: ",
						},

						{
							type: "list",
							name: "department",
							message: "What is your department: ",
							choices: ["finance", "scheduling", "human resources"],
						},
				

				
					])
					getNewEmployee = newEmployee
						
					
				
						console.log(newEmployee);
					
				employee_roles = "";

				if (newEmployee.department === "finance") {
					employee_roles = await inquirer.prompt([
						{
							type: "list",
							name: "finance_roles",
							message: "What is the employee's role?:",
							choices: ["data entry", "accounting"],
						},
					]);
				} else if (newEmployee.department === "scheduling") {
					employee_roles = await inquirer.prompt([
						{
							type: "list",
							name: "scheduling_roles",
							message: "What is the employee's role?:",
							choices: ["scheduler"],
						},
					]);
				} else {
					employee_roles = await inquirer.prompt([
						{
							type: "list",
							name: "humanResources_roles",
							message: "What is the employee's role?:",
							choices: ["human resource I", "human resource II"],
						},
					]);
				}
			}

			db.execute(
"SELECT * FROM `employee`",
(error, result) => {
  console.log(result);
  result.forEach(duk => {
        console.log(duk.first_name);
  })
}
			)
			
		}catch(err){
			console.log(err)
		}
		  responseDone = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Do you want to continue?: ",
               choices: [
                    "Yes",
                    "No"
               ]
          }, ]);

          // console.log(responseDone.choices);
          //the while parameter is saying continue running the code if the user selects "yes"
      while (responseDone.finish === "Yes");

				
	
	
};
			
	
			
			




prompt();

// //call function to run application on the server
// main();
app.listen(port);
module.exports = app;
