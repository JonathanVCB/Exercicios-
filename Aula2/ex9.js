/*
Conversor de moedas - Crie um programa que 
solicite um um valor em real ao usuário e 
converta esse valor, para dólar.
*/
const prompt = require("prompt-sync")();

const valor = parseFloat(prompt("Digite o valor que deseja converter: "));
const dolar = 5.08;
const converter = valor / dolar;

console.log(`R$${valor} reais da $${converter.toFixed(2)} dolares`);
