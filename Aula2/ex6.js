const prompt = require("prompt-sync")();

const vida = +prompt("Digite a vida do monstro (entre 10 e 50):");
const dano = +prompt("Digite a quantidade de dano (entre 5 e 10):");

const resultado = Math.ceil(vida / dano);

console.log(`o jogador irá derrotar o monstro em ${resultado} turnos`);
