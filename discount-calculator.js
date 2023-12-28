/*
23) In an exclusive promotion for Women's Day, a store wants to offer discounts
to everyone, but especially to women. Create a program that reads the name,
gender, and the value of the customer's purchases, then calculates the discounted price. Knowing that:
- Men get a 5% discount
- Women get a 13% discount
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function discountCalc() {
  const clientName = prompt("Enter your name ");

  let customerGender = prompt(
    "Enter your gender (M for male, F for female) "
  ).toUpperCase();
  let totalPrice = parseFloat(prompt("What was the total purchase amount ? "));

  const discountForMen = totalPrice * 0.05;
  const discountForWomen = totalPrice * 0.13;

  const totalPriceMen = totalPrice - discountForMen;
  const totalPriceWomen = totalPrice - discountForWomen;

  if (customerGender === "F") {
    console.log(`
    The customer ${clientName} made a purchase of ${totalPrice.toFixed(2)} USD
    and received a discount of 13%, so she will pay only ${totalPriceWomen.toFixed(2)} USD.`);
    readline.question("Press Enter to Exit ...");
  } else if (customerGender === "M") {
    console.log(`The customer ${clientName} made a purchase of ${totalPrice.toFixed(2)} USD
    and received a discount of 5%, so she will pay only ${totalPriceMen.toFixed(2)} USD.`);
    readline.question("Press Enter to Exit ...");
  } else {
    console.log(`Error: Enter a valid gender`);
    readline.question("Press Enter to Exit ...");
  }
}

discountCalc();
