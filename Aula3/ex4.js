/*
Faça um programa que leia 2 valores inteiros (A e B).
Após, o programa deve mostrar uma mensagem "Sao Multiplos"
ou "Nao sao Multiplos", indicando se os valores lidos são 
múltiplos entre si.
*/
const prompt = require("prompt-sync")();

const valorA = parseFloat(+prompt("Digite seu valor A: "));
const valorB = parseFloat(+prompt("Digite seu valor B: "));

if (valorA % valorB == 0 || valorB % valorA == 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
