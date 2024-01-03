/*
38) Write a program that displays the following countdown on the screen:
6 7 8 9 10 11 Done!
*/

const readline = require("readline-sync");

function displayCountDown() {
  let counter = 6;

  while (counter <= 11) {
    console.log(counter);
    counter++;
  }

  console.log("Done !");
  readline.question('Press Enter to Exit ... ');
}

displayCountDown();
