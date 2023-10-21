var nome = "Marcelo";
var idade = 31;
var time = null;
console.log(typeof nome, typeof idade, typeof time);

var simbolo = Symbol();

console.log(typeof simbolo);

var sobrenome = "Zanguettin";
var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(frase);

var frase2 = `Romário fez ${gols * 2} gols`;

console.log(frase2);

// Exercicio

var idade2 = "31";
console.log(idade2);
console.log(typeof idade2);

var nomeCompleto2 = `${nome} ${sobrenome}`;
console.log(nomeCompleto2);
