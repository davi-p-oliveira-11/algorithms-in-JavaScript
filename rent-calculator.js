/*
 14) The car rental company needs your help to charge for its services. 
 Write a program that asks for the number of kilometers traveled by a 
 rented car and the number of days it was rented. 
 Calculate the total price to pay, 
 knowing that the car costs 90 USD per day and 0.20USD per kilometer traveled.
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function rentCalc() {
  const distanceTraveled = prompt(
    "How many kilometers were traveled with the rented car ? "
  );
  const daysRented = parseInt(
    prompt("For how many days was the car rented ? ")
  );

  const costForDays = daysRented * 90;
  const costForDistance = distanceTraveled * 0.2;

  const totalCost = costForDays + costForDistance;

  /*
  The .toFixed(2) method formats values to have only two decimal places, 
  which is suitable for monetary values.
  */

  console.log(`The client traveled ${distanceTraveled} km with the car, 
rented the car for ${daysRented} days, which cost ${costForDays.toFixed(2)} 
reais for the rented days, and ${costForDistance.toFixed(2)} reais for the kilometers traveled. 
The total cost that the client must pay is: ${totalCost.toFixed(2)} reais.`);
}

rentCalc();
readline.question("Press Enter to Exit ... ");

