const prompt = require("prompt-sync")();

const opcao1 = "Arroz, feijao e bife";
const opcao2 = "Arroz, feijao e frango";
const opcao3 = "Arroz, feijao e Lasanha";

console.log(`
As opções de pratos são:
1 - ${opcao1}
2 - ${opcao2}
3 - ${opcao3}`);

const escolha = +prompt("Digite a sua escolha: ");
if (escolha == 1) {
  console.log(`Você escolheu: ${opcao1}`);
} else if (escolha == 2) {
  console.log(`Você escolheu: ${opcao2}`);
} else if (escolha == 3) {
  console.log(`Você escolheu: ${opcao3}`);
} else {
  console.log("Opção Invalida");
}
