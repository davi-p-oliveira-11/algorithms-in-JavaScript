/*
48) Make a program that reads 7 integer numbers and, in the end, show the sum
of them.
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function sumOfSeven() {
  let counter = 1;
  let sum = 0;

  while (counter <= 7) {
    let number = parseInt(prompt("Enter a number: "));
    sum += number;
    counter++;
  }

  console.log(`The sum of the entered numbers is equal to ${sum}`);
  readline.question('Press Enter to Exit ... ');
}

sumOfSeven();
