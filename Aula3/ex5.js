/*
Faça um programa que leia 3 valores que representam os lados de um triângulo
 A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o
maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três
lados formam, com base nos seguintes casos:
Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
Se A² = B² + C² , apresente a mensagem: TRIANGULO RETANGULO;
Se A² > B² + C² , apresente a mensagem: TRIANGULO OBTUSANGULO;
Se A² < B² + C² , apresente a mensagem: TRIANGULO ACUTANGULO;
Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;
*/
const prompt = require("prompt-sync")();

const ladoA = +prompt("Digite o valor do maior número: ");
const ladoB = +prompt("Digite o valord do segundo maior número: ");
const ladoC = +prompt("Digite o valor do menor número: ");

if (ladoA >= ladoB + ladoC) {
  console.log("NAO FORMA TRIANGULO");
} else if (ladoA === ladoB && ladoC === ladoA) {
  console.log("TRIANGULO EQUILATERO E ACUTANGULO");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  console.log("TRIANGULO ISOSCELES");
}

if (ladoA >= ladoB + ladoC) {
  console.log();
} else if (ladoA ** 2 === ladoB ** 2 + ladoC ** 2) {
  console.log("TRIANGULO RETANGULO");
} else if (ladoA ** 2 > ladoB ** 2 + ladoC ** 2) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (ladoA ** 2 < ladoB ** 2 + ladoC ** 2) {
  console.log("TRIANGULO ACUTANGULO");
}
