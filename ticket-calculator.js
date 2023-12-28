/*
 24) Create an algorithm that asks for the distance a passenger wishes
 to travel in kilometers. Calculate the ticket price, charging R$0.50 per km for
 trips up to 200 km and R$0.45 for longer trips.
*/


const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function ticketPrice() {
  const distanceTraveled = prompt("How many kilometers will you travel ? ");

  const ticketPrice1 = distanceTraveled * 0.5;
  const ticketPrice2 = distanceTraveled * 0.45;

  if (distanceTraveled < 200) {
    console.log(`You will need to pay ${ticketPrice1} USD `);
    readline.question('Press Enter to Exit ... ');
  } else {
    console.log(`You will need to pay ${ticketPrice2} USD `);
    readline.question('Press Enter to Exit ... ');
  }
}

ticketPrice();
