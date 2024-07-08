// function rand(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {


//         setTimeout(() => {
//             if(typeof msg !== 'string') {
//                 reject('Cai no erro');
//                 return;
//             }

//             resolve(msg.toUpperCase() + ' - Passei na Promise');
//             return;
//         }, tempo);
//     });
// }

// function baixaPagina() {
//     const emCache = true;

//     if(emCache) {
//         return Promise.reject('Página em cache'); //Promise.resolve...
//     } else {
//         return esperaAi('Baixei a página', rand(1, 5));
//     }
// }

// baixaPagina()
//     .then(dadosPagina => console.log(dadosPagina))
//     .catch(e => console.log('ERRO: ' + e));


// const promises = [
//     esperaAi('Promisse 1', rand(1, 5)),
//     esperaAi('Promisse 2', rand(1, 5)),
//     esperaAi('Promisse 3', rand(1, 5)),
//     //esperaAi(1000, rand(1, 5)),
// ];



// Promise.race(promises)
//     .then(v => console.log(v))
//     .catch(v => console.log(v));

// Promise.all(promises)
//     .then(v => console.log(v))
//     .catch(v => console.log(v));