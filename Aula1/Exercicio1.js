/*
Leia 2 valores A e B, que correspondem a 2 notas de um aluno.
 A seguir calcule e informe a média ponderada do aluno,
 sabendo que a nota A tem peso 4 e a nota B tem peso 6.
  Ex: nota a * 4 e nota b * 6.
 */
const prompt = require('prompt-sync')();

const notaA = +prompt('Digite sua nota A:') * 4; //Nota A com peso 4
console.log(notaA);

const notaB = +prompt('Digite sua nota B:') * 6; //Nota B com peso 6
console.log(notaB);

const resultado = notaA + notaB; //Soma das duas notas
console.log(`Soma das duas notas é ${resultado}`);

const media = resultado / 10; // Nota média entre notaA e notaB
console.log(`Sua média é ${media}`);
