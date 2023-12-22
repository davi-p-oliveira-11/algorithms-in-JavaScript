/*
2) Create a program that reads a person's name and displays a welcome message to them:
   Example:
   What is your name? Jonh Doe
  Hello John Doe, nice to meet you!"
*/

const prompt = require('prompt-sync')();
const readline = require('readline-sync');

function helloUser () {

  const userName = prompt('What is your name ? ' );

  console.log(`Hello ${userName} nice to meet you !`);

}

helloUser();
readline.question();