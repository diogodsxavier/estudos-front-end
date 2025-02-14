// // new Object -> Object.prototype
// function Produto(nome, preco) {
//     this.nome = nome;
//     this.preco = preco;
// }

// Produto.prototype.desconto = function(valor) {
//     this.preco = this.preco - (this.preco * (valor / 100))
// };
// Produto.prototype.aumento = function(valor) {
//     this.preco = this.preco + (this.preco * (valor / 100))
// };

// const p1 = new Produto('Camiseta', 50);

// const p2 = {
//     nome: 'Caneca',
//     preco: 15
// };
// Object.setPrototypeOf(p2, Produto.prototype);
// p2.aumento(10);

// const p3 = Object.create(Produto.prototype, {
//     preco: {
//         writable: true,
//         configurable: true, 
//         enumerable: true,
//         value: 1200
//     },
//     tamanho: {
//         writable: true,
//         configurable: true, 
//         enumerable: true,
//         value: 20
//     }
// });
// p3.aumento(10);
// console.log(p3);














function Blackout(int1, int2) {
    this.int1 = int1;
    this.int2 = int2;
}
Blackout.prototype.frase = function() {
    return `os integrantes são ${this.int1} e ${this.int2}`;
};

const b2 = {
    int1: 'luiz',
    int2: 'Otávio',
};
Object.setPrototypeOf(b2, Blackout.prototype);

const b3 = Object.create(Blackout.prototype, {
    int1: {
        enumerable: true,=
        value: 'Enzo',
        writable: true,
        configurable: true
    },
});
b3.int2 = 'Samuel';

const b1 = new Blackout('Diogo', 'Theo');
console.log(b3.frase());


