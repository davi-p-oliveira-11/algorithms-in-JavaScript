/*
 39) Create an algorithm that displays the following countdown on the screen:
     10 9 8 7 6 5 4 3 Done !
*/

const readline = require('readline-sync');

function displayCountDown() {
  let counter = 10;

  while (counter >= 3) {
    console.log(counter);
    counter--;
  }

  console.log("Done !");
  readline.question('Press Enter to Exit ... ');
}

displayCountDown();
