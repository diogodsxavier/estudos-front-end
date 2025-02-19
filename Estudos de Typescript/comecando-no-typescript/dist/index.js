"use strict";
// Tipos no TypescriptT
let age = "Hello World!";
const names = ["diogo", "daniel", "silva"];
const num = [1, 2, 3, 4, 5, 6];
let qualqueCoisa = 5;
qualqueCoisa = '1';
// Tuples
const peaple = ['Diogo', 'Daniel', 20];
// Lista de Tuples
const peaples = [
    ['Diogo', 20],
    ['José', 44],
    ['Denize', 39],
    ['Dherik', 16]
];
//  intersections
const userId = 1; // Pode ser qualquer um dos 3 valores
// Enum
var Direcao;
(function (Direcao) {
    Direcao[Direcao["cima"] = 1] = "cima";
    Direcao[Direcao["baixo"] = 2] = "baixo";
    Direcao["direita"] = "direita";
    Direcao["esquerda"] = "esquerda";
})(Direcao || (Direcao = {}));
const direcao = Direcao.direita;
// Type assertions
const objeto = 'Camiseta do Judas Priest';
const camiseta = objeto;
console.log(camiseta);
