/*
 41) Develop a program that displays the following countdown on the screen:
100 95 90 85 80 ... 0 Done !
*/

const readline = require("readline-sync");

function displayCountDown() {
  let counter = 100;

  while (counter >= 0) {
    console.log(counter);
    counter -= 5;
  }

  console.log("Done !");
  readline.question("Press Enter to Exit ... ");
}

displayCountDown();
