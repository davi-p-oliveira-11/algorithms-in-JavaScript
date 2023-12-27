/*
 4) Develop an algorithm that reads two integers and displays their sum.
Example:
Enter a value: 8
Enter another value: 5
The sum of 8 and 5 is equal to 13.
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function sum() {
  const num1 = parseInt(prompt("Enter a number: "));
  const num2 = parseInt(prompt("Enter another number: "));

  const sum = num1 + num2;

  console.log(`The sum between  ${num1} and ${num2} is equal to ${sum}`);
}

sum();
readline.question("Press Enter to Exit ... ");
