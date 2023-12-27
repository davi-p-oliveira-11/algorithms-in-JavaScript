/* 
19) Create an algorithm that reads the name and two grades of a student, calculates their
average, and displays it on the screen. In the end, analyze the average and show whether the student had
good performance or not (if it was above the average of 7.0).
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function analyzeGrades() {
  const grade1 = parseFloat(prompt("Digite a nota da grade 1 "));
  const grade2 = parseFloat(prompt("Digite a nota da grade 2 "));
  const average = (grade1 + grade2) / 2;

  console.log(`A média das provas equivale a ${average.toFixed(1)}`);

  if (average >= 7) {
    console.log("Parabéns voce foi aprovado !");
    readline.question("Press Enter to Exit ... ");
  } else {
    console.log("Sinto muito voce foi reprovado !");
    readline.question("Press Enter to Exit ... ");
  }
}

analyzeGrades();
readline.question("Press Enter to Exit ... ");
