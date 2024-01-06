/*
 46) Create a program that calculates and displays on the screen the result of the sum of 6 +
8 + 10 + 12 + 14 + ... + 98 + 100.
*/

const readline = require("readline-sync");

function displayCountDown() {
  let sum = 0;
  let counter = 6;

  while (counter <= 100) {
    sum += counter;
    counter += 2;
  }

  console.log(`The sum of 6 + 8 + 10 + 12 + ... + 98 + 100 is: ${sum}`);
  readline.question('Press Enter to Exit ... ');
}

displayCountDown();
