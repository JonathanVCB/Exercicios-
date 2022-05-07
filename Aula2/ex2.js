const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome completo: ");
const endereco = prompt("Digite seu endereço completo: ");
const cep = prompt("Digite seu Cep: ");
const telefone = prompt("Digite seu telefone ou celular: ");

console.log(
  `\nnome: ${nome}\nendereço: ${endereco}\ncep: ${cep}\ntelefone: ${telefone}`
);
