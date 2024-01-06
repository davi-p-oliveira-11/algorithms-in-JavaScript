/*
 44) Create an algorithm that reads the initial value of the count, the final value, and the
increment, then displays all the values in the range:
Example: Enter the first Value: 3
Enter the last Value: 10
Enter the increment: 2
Count: 3 5 7 9 Done!
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function displayCountDown() {
  let initialValue = parseInt(prompt("Enter the first Value: "));
  let finalValue = parseInt(prompt("Enter the last Value: "));
  let increment = parseInt(prompt("Enter the increment: "));

  let counter = initialValue;

  while (counter <= finalValue) {
    console.log(counter);
    counter += increment;
  }

  console.log("Done !");
  readline.question("Press Enter to Exit ... ");
}

displayCountDown();
