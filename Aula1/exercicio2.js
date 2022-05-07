/*
Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1
 o número de peças1 que o usuário quer, o valor unitário de cada peça1,
  o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2.
   Após, calcule e mostre o valor a ser pago.
   */
const prompt = require('prompt-sync')();

const nome1 = prompt('Digite o nome da peça1: ');
const peca1 = +prompt('Digite o numero de peça1 que deseja:');
const valorpeca1 = 30;

console.log(`quantidade de ${nome1} desejados ${peca1}`);

const nome2 = prompt('Digite o nome da peça2: ');
const peca2 = +prompt('Digite o numero de peça2 que deseja:');
const valorpeca2 = 40;
console.log(`quantidade de ${nome2} desejados ${peca2}`);

const resultadopeca1 = peca1 * valorpeca1;
console.log(`Total a pagar pelos(a) ${nome1} é ${resultadopeca1}`);

const resultadopeca2 = peca2 * valorpeca2;
console.log(`Total a pagar pelos(a) ${nome2} é ${resultadopeca2}`);

const pagar = resultadopeca1 + resultadopeca2;

console.log(`O valor total sera de ${pagar}`);
