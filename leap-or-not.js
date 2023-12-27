/*
 21) Create an algorithm that reads a specific year and shows whether it is or is not a
LEAP year.
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function isLeap() {
  const year = parseInt(prompt("Enter a year: "));

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(`The year ${year} is a leap year`);
    readline.question("Press Enter to Exit ... ");
  } else {
    console.log(`The year ${year} is not a leap year.`);
    readline.question("Press Enter to Exit ... ");
  }
}

isLeap();
