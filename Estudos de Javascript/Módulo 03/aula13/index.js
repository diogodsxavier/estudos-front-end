// function* gerador() {
//     // Código qualquer ...
//     yield 'Valor 1';
//     // Código qualquer ...
//     yield 'Valor 2';
//     // Código qualquer ...
//     yield 'Valor 3';
// }

// function* gerador2() {
//     let i = 0;
//     while (true) {
//         yield i;
//         i++;
//     }
// }

// function* geradora3() {
//     yield 0;
//     yield 1;
//     yield 2;
// }

// function* geradora4() {
//     yield* geradora3();
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const g4 = geradora4();

// function* geradora5() {
//     yield function() {
//         console.log('Vim do Y1');
//     };

//     yield function() {
//         console.log('Vim do RETURN');
//     }

//     yield function() {
//         console.log('Vim do Y3');
//     };
// }

// const g5 = geradora5();
// const func1 = g5.next().value;
// const func2 = g5.next().value;
// const func3 = g5.next().value;

// func1();
// func2();
// func3();

function* ge1() {
    yield 0;
    yield 1;
    yield 2;
}

function* ge2() {
    yield* ge1();
    yield 3;
    yield 4;
}

const f1 = ge2();
//console.log(f1.next().value);
for(let i of f1) {
    console.log(i);
}