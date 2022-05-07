/*
 Calculadora de Dano - Escreva um programa que 
 receba dois valores digitados pelo usuário: 
 quantidade de vida de um monstro (entre 10 e 50) e 
 valor do ataque do jogador por turno (entre 5 e 10). 
 Baseado nos valores digitados, exiba a quantidade de 
 turnos que o jogador irá demorar para conseguir derrotar
  o monstro (o jogador irá derrotar o monstro em 8 turnos).
 */

const prompt = require("prompt-sync")();

const vida = +prompt("Digite a vida do monstro (entre 10 e 50):");
const dano = +prompt("Digite a quantidade de dano (entre 5 e 10):");

const resultado = Math.ceil(vida / dano);

console.log(`o jogador irá derrotar o monstro em ${resultado} turnos`);
