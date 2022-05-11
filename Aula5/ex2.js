/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd';
*/

const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");

do {
  var idade = +prompt("Digite sua idade: ");
  if (idade <= 0 || idade >= 150) {
    console.log("Idade tem que ser entre 0 e 150");
  }
} while (idade <= 0 || idade >= 150);

do {
  var salario = +prompt("Digite seu salario: ");
  if (salario < 0) {
    console.log("Digite um valor maior ou igual a 0");
  }
} while (salario < 0);

do {
  var civil = prompt("Digite seu estado cívil (s,c,v,d): ");
  if (civil != "s" && civil != "c" && civil != "v" && civil != "d") {
    console.log("Estado cívili incorreto");
  }
} while (civil != "s" && civil != "c" && civil != "v" && civil != "d");
