/*
56) Create a program that reads several numbers from the keyboard and shows, in the end, the sum of them.
Note: The program will be interrupted when the number 1111 is entered.
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function dontType1111() {
  let counter = 1;
  let sum = 0;
  let number = 0;

  while (counter <= 20) {
    number = parseInt(prompt("Enter a number: "));
    if (number === 1111) {
      console.log(`
      The number 1111 was entered. End of the program..`);
      readline.question('Press Enter to Exit ... ');
      break;
    }
    sum += number;
    counter++;
  }

  if (number !== 1111) {
    console.log(`The sum of the entered numbers is equal to ${sum}.`);
    readline.question();
  }
}

dontType1111();

