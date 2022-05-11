/*
Faça um programa que peça um número par, 
e repita a execução caso o número digitado seja ímpar.
*/

const prompt = require("prompt-sync")();

do {
  var num = +prompt("Digite um numero par: ");
  if (num % 2 == 1) {
    console.log("O número é impar");
  }
} while (num % 2 == 1);
{
  console.log("O número é par");
}
