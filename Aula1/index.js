const prompt = require('prompt-sync')();

const nome = prompt('digite o seu nome:');

console.log(nome, typeof nome);

const idade = +prompt('Digite a sua iddade:'); //Colocar sinal de + para converter para number ao inves de string

console.log(idade, typeof idade);

const idadeanoqvem = idade + 1;

console.log(nome + ' Sua idade no ano que vem sera ' + idadeanoqvem + ' anos');
