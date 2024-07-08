// // Jeito 1
// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, 'Diogo', [8, 9, 10]);
// console.log(a3);

// // Jeito 2
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, 'Diogo', ...a2, ...[7, 8, 9, 10]];
console.log(a3);