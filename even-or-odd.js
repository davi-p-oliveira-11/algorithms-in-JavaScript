/*
20) Develop a program that reads an integer and shows whether it is EVEN or
ODD
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function isEvenOrOdd() {
  const number = parseInt(prompt("Enter a number "));

  if (number % 2 === 0) {
    console.log("The number is even");
    readline.question("Press Enter to Exit ... ");
  } else {
    console.log("The number is odd");
    readline.question("Press Enter to Exit ... ");
  }
}

isEvenOrOdd();
