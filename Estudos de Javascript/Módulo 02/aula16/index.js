// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Daniel',
    idade: 19
};

// const chave = 'nome';
// console.log(pessoa[chave]);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}