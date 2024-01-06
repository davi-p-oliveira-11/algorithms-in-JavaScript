/*
 43) Develop an algorithm that displays a countdown from 30 to 1,
marking the numbers that are divisible by 4, exactly as shown below:
30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]..
*/

const readline = require("readline-sync");

function displayCountDown() {
  let contador = 31;

  while (contador >= 2) {
    contador--;
    if (contador % 4 === 0) {
      console.log(`[${contador}]`);
    } else {
      console.log(contador);
    }
  }

  console.log("Acabou !");
  readline.question('Press Enter to Exit ... ');
}

displayCountDown();
