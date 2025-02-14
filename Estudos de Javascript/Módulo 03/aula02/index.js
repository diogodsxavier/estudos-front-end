// function funcao([valor1, valor2, valor3]) {
//     // let total = 0;
//     // for(argumento of arguments) {
//     //     total += argumento;
//     // }
//     // console.log(total, a, b, c);

//     //console.log(a + b + c);

//     console.log(valor1, valor2, valor3);
// }
// // const obj = {nome: 'Diogo', sobrenome: 'Daniel', idade: 19};
// funcao(['Diogo', 'Daniel', 19]);

const conta = function (operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }

    console.log(operador, acumulador, numeros);
};
conta('*', 1, 20, 30, 40, 50);

const e = (...args) => {
    console.log(args);
};
e('*', 1, 20, 30, 40, 50);