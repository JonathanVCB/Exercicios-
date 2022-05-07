/*
Etiqueta - Elabore um programa que escreve seu nome completo
na primeira linha, seu endereço na segunda, o CEP na terceira
e o telefone na quarta.
*/
const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome completo: ");
const endereco = prompt("Digite seu endereço completo: ");
const cep = prompt("Digite seu Cep: ");
const telefone = prompt("Digite seu telefone ou celular: ");

console.log(
  `\nnome: ${nome}\nendereço: ${endereco}\ncep: ${cep}\ntelefone: ${telefone}`
);
