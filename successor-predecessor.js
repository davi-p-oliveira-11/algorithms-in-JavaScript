/*
 6) Create a program that reads an integer and displays its predecessor and successor.
 Example:
 Enter a number: 9
 The predecessor of 9 is 8
 The successor of 9 is 10
*/

const prompt = require('prompt-sync')();
const readline = require('readline-sync');

function successorPredecessor () {
  
  const num = parseInt(prompt('Enter a number '));

  const predecessor = num - 1;
  const successor = num + 1;

  console.log(`The predecessor of ${num} is ${predecessor}\n The successor of ${num} is ${successor}`);
}

successorPredecessor();
readline.question();

