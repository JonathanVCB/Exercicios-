/*
Leia 3 valores de entrada, referentes à idade de uma pessoa em:
 anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 3 7 dias.
  Calcule e exiba o total de dias que essa pessoa já viveu. Obs.:
   apenas para facilitar o cálculo, considere todo ano com 365 dias
    e todo mês com 30 dias.
    */
const prompt = require('prompt-sync')();

const idade = +prompt('digite sua idade: ');
const meses = +prompt('digite a quantidade de meses: ');
const dias = +prompt('digite a quantidade de dias: ');

const anosdias = idade * 365;
const mesesdias = meses * 30;

const resultado = anosdias + mesesdias + dias;

console.log(`eu tenho ${resultado} dias vividos`);