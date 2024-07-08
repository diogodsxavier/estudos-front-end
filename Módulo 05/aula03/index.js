// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     this.estoque = estoque;

//     let estoquePrivado = estoque;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         configurable: true,
//         get: function() {
//             return estoquePrivado;
//         },
//         set: function(valor) {
//             if(typeof valor !== 'number') {
//                 throw new TypeError('Precisa ser um número!');
//             };
//             estoquePrivado = valor;
//         }
//     });
// }

// function criaProduto(nome) {
//     return {
//         get nome() {
//             return nome;
//         },
//         set nome(valor) {
//             valor = valor.replace('coisa.', '');
//             nome = valor;
//         }
//     };
// }

// // const p1 = new Produto('camisa', 45, 23);
// // p1.estoque = 'olá';
// //console.log(p1);
// // console.log(p1.estoque);

// const p2 = criaProduto('camisa');
// p2.nome = 'Qualquer coisa.';
// console.log(p2.nome);

function Produto(nome, preco) {
    this.nome = nome;

    Object.defineProperty(this, 'preco', {
        enumerable: true,
        configurable: true, 
        get: function() {
            return preco;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('Precisa ser um número!');
            }
            preco = valor;
        }
    });
}

const p = new Produto('Camiseta', 100);
p.preco = 32;
console.log(p.preco);