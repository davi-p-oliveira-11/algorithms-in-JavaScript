/*
22) Write a program that reads a boy's year of birth and shows his
status in relation to military enlistment.
- If he is under 18 years old, show how many years are left until
enlistment.
- If he is already over 18 years old, show how many years have passed since
enlistment.
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function enlistmentCheck() {
  const yearOfBirth = parseInt(prompt("What was your year of birth ? "));
  const currentYear = parseInt(prompt("Enter the current year ? "));

 
  // Calculate the user's age
  const age = currentYear - yearOfBirth;

  // Calculate the remaining years for enlistment
/* The Math.max function with the values 0, 18, and the variable
age ensures that the remaining years will never have a negative value.
If they do, the value will be equal to 0. */
  const remainingYears = Math.max(0, 18 - age);

  // Calculate the year when the person turned 18 years old
  const yearWhenTurns18 = yearOfBirth + 18;

  // Calculate the years that have already passed since enlistment
  const yearsPassed = currentYear - yearWhenTurns18;

  if (age < 18) {
    console.log(
      `You cannot enlist yet, there are ${remainingYears} years left for enlistment!`
    );
    readline.question("Press Enter to Exit ... ");
  } else if (age === 18) {
    console.log(`You are in the right year to enlist.`);
    readline.question("Press Enter to Exit ... ");
  } else if (age > 18) {
    console.log(
      `${yearsPassed} years have passed since your right enlistment year.`
    );
    readline.question("Press Enter to Exit ... ");
  }
}

enlistmentCheck();
