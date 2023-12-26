/*
 10) Create an algorithm that reads the width and height of a wall, 
 calculates and displays the area to be painted, 
 and the amount of paint needed for the job, 
 considering that each liter of paint covers an area of 2 square meters.
*/

const prompt = require('prompt-sync')();
const readline = require('readline-sync');

function areaCalculator() {
 
  const width = parseFloat(prompt('What is the width of the wall? (Enter a value in meters)' ));
  const height  = parseFloat(prompt('What is the height of the wall? (Enter a value in meters) '));

  const area = width * height;
  const paintNeeded = area * 0.5;

  console.log(`The area of the wall to be painted is ${area}m²,
  and the amount of paint needed to paint the wall is ${paintNeeded} liters.`);
}

areaCalculator();
readline.question();
