const prompt = require("prompt-sync")();

const aluno1 = prompt("Digite o nome do aluno (a): ");
const nota1 = prompt(`Digite a nota do (a) ${aluno1}`);

const aluno2 = prompt("Digite o nome do aluno (a): ");
const nota2 = prompt(`Digite a nota do (a) ${aluno2}`);

const aluno3 = prompt("Digite o nome do aluno (a): ");
const nota3 = prompt(`Digite a nota do (a) ${aluno3}`);

const aluno4 = prompt("Digite o nome do aluno (a): ");
const nota4 = prompt(`Digite a nota do (a) ${aluno4}`);

console.log(`
ALUNO(A)       |     NOTA
${aluno1}      |     ${nota1}
${aluno2}      |     ${nota2}
${aluno3}      |     ${nota3}
${aluno4}      |     ${nota4}`);
