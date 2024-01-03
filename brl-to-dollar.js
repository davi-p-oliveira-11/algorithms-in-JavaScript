/*
 9) Create an algorithm that reads how much money a person has in their wallet
 (in R$) and shows how many dollars they can buy. Consider US$1.00 = R$3.45.
*/

const prompt = require('prompt-sync')();
const readline = require('readline-sync');

function brlToDollar () {

const availableBRL = parseFloat(prompt('Enter a value in BRL: '));
const dollars = availableBRL / 3.45; 

console.log(`'You can buy a total of ${dollars.toFixed(2)}USD`);

}

brlToDollar();
readline.question('Press Enter to Exit ...')
