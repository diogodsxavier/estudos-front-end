const num = [1,2,3,4,5,6,7,8,9];

// for (let numero of num) {
//     //const numero = num[i];

//     if (numero === 4) {
//         console.log('Pulei o número 4');
//         continue;
//     }

//     console.log(numero);

//     if (numero === 8) {
//         console.log('Número 8 encontrado, saindo...');
//         break;
//     }

//     //console.log(numero);
// }

let i = 0;

do {
    const numero = num[i];

    if (numero === 4) {
        console.log('Pulei o número 4');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 8) {
        console.log('Número 8 encontrado, saindo...');
        i++;
        break;
    }

    i++;
} while (i < num.length);

























// const numeros = [1,2,3,4,5,6,7,8,9];

// for (let i in numeros) {
//     let numero = numeros[i];

//     if (numero === 2) {
//         console.log('Pulei o número 2');
//         continue;
//     }

//     console.log(numero);

//     if (numero === 7) {
//         console.log('7 encontrado, saindo...');
//         break;
//     }
// }

