// function Produto(nome, preco, estoque) {
//     // this.nome = nome,
//     // this.preco = preco,

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         value: estoque,
//         writable: false,
//         configurable: true
//     });

//     Object.defineProperties(this, {
//         nome: {
//             enumerable: true,
//             value: nome,
//             writable: true,
//             configurable: true                
//         },
//         preco: {
//             enumerable: true,
//             value: preco,
//             writable: true,
//             configurable: true                
//         }
//     });
// }

// const p1 = new Produto('Camisa', 35, 15);
// p1.estoque = 1;

// for(let chave in p1) {
//     console.log(chave);
// }
