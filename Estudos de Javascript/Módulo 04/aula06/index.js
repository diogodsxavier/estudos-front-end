// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador += valor;
    return acumulador;
}, 0);
//console.log(total);

















const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia',  idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47}
];

const maisVelha = pessoas.reduce(function(a, v) {
    if(a.idade > v.idade) return a;
    return v;
});
console.log(maisVelha);