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

const ladoA = parseFloat(+prompt("Digite o valor o maior número: "));
const ladoB = parseFloat(+prompt("Digite o valor o segundo maior número: "));
const ladoC = parseFloat(+prompt("Digite o valor o menor número: "));
const Aquad = ladoA * ladoA;
const Bquad = ladoB * ladoB;
const Cquad = ladoC * ladoC;
const conta1 = Bquad + Cquad;
const conta2 = ladoB + ladoC;

if (ladoA >= conta2) {
  console.log("NAO FORMA TRIANGULO");
} else if (Aquad === conta1) {
  console.log("TRIANGULO RETANGULO");
} else if (Aquad > conta1) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (Aquad < conta1) {
  console.log("TRIANGULO ACUTANGULO");
} else if ((ladoA === ladoB) === ladoC) {
  console.log("TRIANFULO EQUILATERO");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  console.log("TRIANGULO ISOSCELES");
}
