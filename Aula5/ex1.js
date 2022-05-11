/*
Faça um programa que leia um nome de usuário e a sua senha e não aceite
a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando
a pedir as informações.
*/

const prompt = require("prompt-sync")();

let nome = "";
let senha = "";

do {
  nome = prompt("Digite seu nome de usuário: ");
  senha = prompt("Digite sua senha: ");
  if (nome == senha) {
    console.log("INVALIDO");
  }
} while (nome == senha);
{
  console.log("CADASTRADO");
}
