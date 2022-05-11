/*
Caixa Eletrônico - Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar
 quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e
  o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/

const prompt = require("prompt-sync")();

let quantia = +prompt(
  "Digite a quantidade que deseja sacar (entre R$:10 e R$:600): "
);

const nota100 = Math.floor(quantia / 100);
quantia = quantia % 100;

const nota50 = Math.floor(quantia / 50);
quantia = quantia % 50;

const nota10 = Math.floor(quantia / 10);
quantia = quantia % 10;

const nota5 = Math.floor(quantia / 5);
quantia = quantia % 5;

const nota1 = quantia;

if (nota100 >= 1) {
  console.log(`${nota100} Notas de R$:100`);
}
if (nota50 >= 1) {
  console.log(`${nota50} Notas de R$:50`);
}
if (nota10 >= 1) {
  console.log(`${nota10} Notas de R$:10`);
}
if (nota5 >= 1) {
  console.log(`${nota5} Notas de R$:5`);
}
if (nota1 >= 1) {
  console.log(`${nota1} Notas de R$:1`);
}
