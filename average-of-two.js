/*
 5) Create a program that reads a student's two grades in a subject and displays their average on the screen.
Example:
Grade 1: 4.5
Grade 2: 8.5
The average between 4.5 and 8.5 is equal to 6.5.
*/

const prompt = require('prompt-sync')();
const readline = require('readline-sync');

function averageOfTwo () {
  
  const grade1 = parseFloat(prompt('Enter the first grade '));
  const grade2 = parseFloat(prompt('Enter the second grade '));

  const average = (grade1 + grade2) / 2;

  console.log(`The average between ${grade1} and ${grade2} is equal to ${average.toFixed(1)}`);

}

averageOfTwo();
readline.question();