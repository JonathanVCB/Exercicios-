/*
Faça o cálculo contrário: Leia um valor inteiro correspondente
 à idade de uma pessoa em dias e informe-a em anos, meses e dias.
  Também considere todo ano com 365 dias e todo mês com 30 dias.
  */
var prompt = require('prompt-sync')();

const diastotal = +prompt('Digite o total de dias:');
const restodia = parseInt(diastotal % 365);
const ano = parseInt(diastotal / 365);
const mes = parseInt(restodia / 30);
const dia = parseInt(restodia % 30);

console.log(`Sua idade é ${ano} ${mes} e ${dia} dias`);
