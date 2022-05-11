/*
Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 
Salários até R$ 280,00 (incluindo): aumento de 20%. 
Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
Salários de R$ 1500,00 em diante: aumento de 5%.
Após o aumento ser realizado, informe na tela:
O salário antes do reajuste.
O percentual de aumento aplicado.
O valor do aumento.
O novo salário, após o aumento.
*/

const prompt = require("prompt-sync")();

const vintepo = 0.2;
const quinzepo = 0.15;
const dezpo = 0.1;
const cincopo = 0.05;

const salario = +prompt("Digite seu salário atual: ");

if (salario <= 280 && salario >= 1) {
  let aumento = salario * vintepo;
  console.log(`Seu salario antes do reajuste é ${salario}
    foi aplicado um aumento de 20%
    Teve um aumento de ${aumento}
    seu salario após aumento é ${aumento + salario}`);
} else if (salario <= 700) {
  let aumento = salario * quinzepo;
  console.log(`Seu salario antes do reajuste é ${salario}
      foi aplicado um aumento de 15%
      Teve um aumento de ${aumento}
      seu salario após aumento é ${aumento + salario}`);
} else if (salario <= 1500) {
  let aumento = salario * dezpo;
  console.log(`Seu salario antes do reajuste é ${salario}
      foi aplicado um aumento de 10%
      Teve um aumento de ${aumento}
      seu salario após aumento é ${aumento + salario}`);
} else if (salario >= 1500) {
  let aumento = salario * cincopo;
  console.log(`Seu salario antes do reajuste é ${salario}
      foi aplicado um aumento de 5%
      Teve um aumento de ${aumento}
      seu salario após aumento é ${aumento + salario}`);
} else {
  console.log("INVALIDO");
}
