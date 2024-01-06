/*
 47) Develop an application that displays on the screen the result of the expression 500 +
450 + 400 + 350 + 300 + ... + 50 + 0.
*/

const readline = require("readline-sync");

function displayCountDown() {
  let sum = 0;
  let counter = 500;

  while (counter != 0) {
    sum += counter;
    counter -= 50;
  }

  console.log(`The sum of 500 + 450 + 400 + 350 + 300 ... + 50 + 0 is: ${sum}`);
  readline.question('Press Enter to Exit ... ');
}

displayCountDown();
