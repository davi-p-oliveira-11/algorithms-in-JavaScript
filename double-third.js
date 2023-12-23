/*
  7) Create an algorithm that reads a real number and displays on the screen its double and one-third.
    Example:
    Enter a number: 3.5
    The double of 3.5 is 7.0
    One-third of 3.5 is 1.16666
*/

const prompt = require('prompt-sync')();
const readline = require('readline-sync');

function doubleThird () {

  const number = parseFloat(prompt("Enter a number "));

  const doubleOf =  number * 2;
  const thirdOf = number / 3;

  console.log(`The double of ${number} is ${doubleOf.toFixed(2)}`);
  console.log(`The third of ${number} is ${thirdOf.toFixed(2)}`);
}

doubleThird();
readline.question();