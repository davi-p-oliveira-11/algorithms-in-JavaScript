/*
34) The Body Mass Index (BMI) is a value calculated based on a person's height and weight. 
According to the BMI value, we can classify the individual within certain ranges.

below 18.5: Underweight
between 18.5 and 25: Ideal weight
between 25 and 30: Overweight
between 30 and 40: Obesity
above 40: Morbid obesity
Note: BMI is calculated by the expression weight/height² (weight divided by the square of height)
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function bmiCalc() {
  const weight = parseFloat(prompt("Enter your weight in kilograms "));
  const height = parseFloat(prompt("Enter your height in meters "));

  const bmi = weight / height ** 2;

  if (bmi < 18.5) {
    console.log(`Your BMI is ${bmi.toFixed(2)} ,you are underweight.`);
    readline.question("Press Enter to Exit ... ");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`Your BMI is ${bmi.toFixed(2)} ,you are at the ideal weight.`);
    readline.question("Press Enter to Exit ... ");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log(`Your BMI is ${bmi.toFixed(2)} ,you are overweight`);
    readline.question("Press Enter to Exit ... ");
  } else if (bmi >= 30 && bmi <= 39.9) {
    console.log(`Your BMI is ${bmi.toFixed(2)} ,you have obesity.`);
    readline.question("Press Enter to Exit ... ");
  } else if (bmi > 40) {
    console.log(`Your BMI is ${bmi.toFixed(2)} you have morbid obesity.`);
    readline.question("Press Enter to Exit ... ");
  }
}

bmiCalc();

