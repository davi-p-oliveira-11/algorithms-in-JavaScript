/*
4.1) Desenvolva um algoritmo que leia dois números inteiros e mostre a
soma, subtração, multiplicação, divisão, exponenciação e módulo
entre eles.  
*/

/* 
Algoritmo
1- Pedir ao usuário que digite um número
   1.1 - Armazenar o valor em uma variável
   1.2 - Converter a string em um número
  2- Pedir ao usuário que digite outro número
   2.1 - Armazenar o valor em uma variável
   2.2 - Converter a string em um número
  3 - Executar a soma dos números
   3.1 - Armazenar o valor em uma variável
  4 - Executar a subtração dos números
    4.1 Armazenar o valor em uma variável
  5 - Executar a multiplicacao dos numeros
    5.1 Armazenar o valor em uma variável
  6 - Executa a divisão dos numeros
    6.1 Armazenar o valor em uma variável
  7 - Executar a exponenciacao dos numeros
    7.1 Armazenar o valor em uma variável
  8 - Executar o módulo dos números
    8.1 Armazenar o valor em uma variável
  9 - Mostrar a mensagem com o resultado de 
      todas as operações 
  */

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
