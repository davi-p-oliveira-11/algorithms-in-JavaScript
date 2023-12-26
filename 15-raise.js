/*
 13) Create an algorithm that reads an employee's salary, 
 calculates, and displays their new salary with a 15% increase."
*/

const prompt = require('prompt-sync')();
const readline = require('readline-sync');

function raiseSalary() {
  
  const salary = parseFloat(prompt('Qual o valor do seu salário ?'));
 
  const raiseAmount = salary * 0.15;
  const newSalary = salary + raiseAmount;
 
  console.log(`Your new salary with a 15% raise is equivalent to ${newSalary}`);
}

raiseSalary();
readline.question('Press Enter to Exit ... ');
