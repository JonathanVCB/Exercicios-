/*
Faça um programa para a leitura de quatro notas parciais
 de um aluno. O programa deve calcular a média alcançada
  por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Em recuperação", se a média for entre cinco e sete;
A mensagem "Reprovado", se a média for menor que cinco.
*/
const prompt = require("prompt-sync")();

const nota1 = parseFloat(+prompt("Digite a primeira nota: "));
const nota2 = parseFloat(+prompt("Digite a segunda nota: "));
const nota3 = parseFloat(+prompt("Digite a terceira nota: "));
const nota4 = parseFloat(+prompt("Digite a quarta nota: "));

const resultado = (nota1 + nota2 + nota3 + nota4) / 4;

if (resultado < 1 || resultado > 10) {
  console.log("INVALIDO");
} else if (resultado >= 7) {
  console.log("Aprovado");
} else if (resultado >= 5) {
  console.log("Em recuperação");
} else {
  console.log("Reprovado");
}
