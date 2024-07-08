// //                -5       -4       -3      -2       -1
// //                0         1        2       3        4
// const nomes = ['Diogo', 'Thiago', 'Enzo', 'Theo', 'Otávio'];

// // Push e unshift
// nomes.splice(2, 1, 'Machado');
// nomes.splice(-1, 1);
// console.log(nomes);

// // nomes.splice(índice, delete, elem1, elem2, elem3);
// // Pop
// const removidos = nomes.splice(3, 2, 'Samuel', 'Algusto' );
// console.log(nomes, removidos);

// /// Shift
// const removidos2 = nomes.splice(0, 1);
// console.log(nomes, removidos2);

const nomes = ['Diogo', 'Thiago', 'Enzo', 'Theo', 'Otávio'];

nomes.splice(0, 0, 'Luiz');
console.log(nomes);