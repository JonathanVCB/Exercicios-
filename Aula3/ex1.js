/*
Faça um Programa que peça dois números e imprima
 o maior deles, e informe caso eles sejam iguais.
*/
const prompt = require("prompt-sync")();

const numero1 = +prompt("Digite O Primeiro numero: ");
const numero2 = +prompt("Digite O Segundo numero: ");

if (numero1 > numero2) {
  console.log(`${numero1} é maior numero`);
} else if (numero1 < numero2) {
  console.log(`${numero2} é maior numero`);
} else if (numero1 === numero2) {
  console.log("Os numeros são iguais");
}
