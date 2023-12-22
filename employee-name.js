/* 
3) Create a program that reads the name and salary of an employee, displaying a message at the end.
Example:
Employee's Name: Jane Doe
Salary: 1850.45 USD
Employee Jane Doe has a salary of R$1850.45 in June.
*/

const prompt = require('prompt-sync')();
const readline = require('readline-sync');

function employeeName () {

  const employeeName = prompt('What is the employee name ? ');
  const salaryValue = parseFloat(prompt('What is the value of the employee salary ? ' ));

  console.log(`Employee ${employeeName} has a salary of ${salaryValue} USD`)
}

employeeName();
readline.question();