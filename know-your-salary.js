/* 
  15) Create a program that reads the number of days worked in a month and shows
  the salary of an employee, knowing that they work 8 hours a day and earn R$25
  per hour worked.
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function knowSalary() {
  const daysWorked = parseInt(
    prompt("How many days did you work last month ? ")
  );
  const dayOfWork = 8 * 25;
  const employeeSalary = daysWorked * dayOfWork;

  console.log(`The employee worked for ${daysWorked} days and will 
  receive a salary of ${employeeSalary} USD.`);
}

knowSalary();
readline.question("Press Enter to Exit ... ");
