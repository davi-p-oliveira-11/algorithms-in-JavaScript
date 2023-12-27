/*
12) Create a program that reads the price of a product, 
calculates, and displays its PROMOTIONAL PRICE with a 5% discount.
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function fiveDiscount() {
  const productPrice = parseFloat(prompt("Qual o valor do produto ? "));

  const discount = productPrice * 0.05;
  const finalPrice = productPrice - discount;

  console.log(`O preço do produto é: ${productPrice}, 
  e o preço promocional do produto é ${finalPrice}`);
}

fiveDiscount();
readline.question("Press Enter to Exit ...");

