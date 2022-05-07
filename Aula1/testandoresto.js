const prompt = require('prompt-sync')();
const num1 = +prompt('Digite um número: ');
const num2 = +prompt('Digite outro número: ');

console.log(`Resto da divisão de ${num1}/${num2}: ${num1 % num2}`);
