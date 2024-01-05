/*
 42) Create an algorithm that asks the user for any 
 positive integer and displays a countdown up to that value:
Example: Enter a value: 35
Countdown: 1 2 3 4 5 6 7 ... 33 34 35 Done !
*/

const prompt = require('prompt-sync')();
const readline = require('readline-sync');

function displayCountDown() {
  let number = parseInt(prompt("Enter a positive integer "));
  let counter = 1;

  while (counter <= number) {
    console.log(counter);
    counter++;
  }

  console.log("Done !");
  readline.question("Press Enter to Exit ...");
}

displayCountDown();

