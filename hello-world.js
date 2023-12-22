/*
 1) Write a program that displays the message 'Hello, World!' on the screen
*/

const readline = require('readline-sync');

function helloWorld () {

  const message = "Hello World";

  console.log(message)
}

helloWorld();

readline.question();
