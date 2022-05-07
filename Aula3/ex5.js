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

const ladoA = +prompt("Digite o valor o maior número: ");
const ladoB = +prompt("Digite o valor o segundo maior número: ");
const ladoC = +prompt("Digite o valor o menor número: ");
const Aquad = ladoA * ladoA;
const Bquad = ladoB * ladoB;
const Cquad = ladoC * ladoC;

if (ladoA >= ladoB + ladoC) {
  console.log("NAO FORMA TRIANGULO");
} else if (Aquad === Bquad + Cquad) {
  console.log("TRIANGULO RETANGULO");
} else if (Aquad > Bquad + Cquad) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (Aquad < Bquad + Cquad) {
  console.log("TRIANGULO ACUTANGULO");
} else if ((ladoA === ladoB) === ladoC) {
  console.log("TRIANFULO EQUILATERO");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  console.log("TRIANGULO ISOSCELES");
}
