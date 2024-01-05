/*
 40) Create an application that displays the following countdown on the screen:
0 3 6 9 12 15 18 Done !
*/

const readline = require('readline-sync');

let counter = 0;

while (counter <= 18) {
  console.log(counter);
  counter +=3;
}

console.log('Done !');
readline.question();
