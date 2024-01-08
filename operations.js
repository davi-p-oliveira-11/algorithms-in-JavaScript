/*
4.1) Develop an algorithm that reads two integer numbers and shows the
sum, subtraction, multiplication, division, exponentiation, and modulo
between them.
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function operations() {
  const num1 = parseInt(prompt("Enter a number "));
  const num2 = parseInt(prompt("Enter another number: "));

  const sum = num1 + num2;
  const subtraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num1 / num2;
  const exponentiation = num1 ** num2;
  const modulo = num1 % num2;

  console.log(`The sum of ${num1} and ${num2} is equal to ${sum}
  The subtraction of ${num1} by ${num2} is equal to ${subtraction}
  The multiplication of ${num1} by ${num2} is equal to ${multiplication}
  The division of ${num1} by ${num2} is equal to ${division}
  The exponentiation of ${num1} to the power of ${num2} is equal to ${exponentiation}
  The modulo of ${num1} divided by ${num2} is equal to ${modulo}
  `);
  readline.question("Press Enter to Exit ... ");
}

operations();
