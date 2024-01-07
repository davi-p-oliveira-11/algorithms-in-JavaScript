/*
4.1) Desenvolva um algoritmo que leia dois números inteiros e mostre a
soma, subtração, multiplicação, divisão, exponenciação e módulo
entre eles.  
*/

function doOperations () {
   
}

doOperations();

//translate and then encapsulate the logic

/* Bibliotecas */
const prompt = require('prompt-sync')();
const readline = require('readline-sync');

const num1 = parseInt(prompt('Digite um número '));
const num2 = parseInt(prompt('Digite um outro número '));
      
const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;
const exponenciacao = num1 ** num2;
const modulo = num1 % num2;
    
console.log(`A soma de ${num1} e ${num2} é igual a ${soma}
A subtração de ${num1} por ${num2} é igual a ${subtracao}
A multiplicação de ${num1} por ${num2} é igual a ${multiplicacao}
A divisao de ${num1} por ${num2} é igual a ${divisao}
A exponenciacao de ${num1} por ${num2} é igual a ${exponenciacao}
O módulo de ${num1} por ${num2} é igual a ${modulo} `);
readline.question();
