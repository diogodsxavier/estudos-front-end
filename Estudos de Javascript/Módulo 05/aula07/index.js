// // Produto
// // Camiseta = cor, caneca = material
// function Produto(nome, preco) {
//     this.nome = nome;
//     this.preco = preco;
// }
// Produto.prototype.aumento = function(quantia) {
//     this.preco += quantia;
// };
// Produto.prototype.desconto = function(quantia) {
//     this.preco -= quantia;
// };

// function Camiseta(nome, preco, cor) {
//     Produto.call(this, nome, preco);
//     this.cor = cor;
// }
// Camiseta.prototype = Object.create(Produto.prototype);
// Camiseta.prototype.constructor = Camiseta;

// Camiseta.prototype.aumento = function(percentual) {
//     return this.preco + (this.preco * (percentual / 100));
// };

// function Caneca(nome, preco, material, estoque) {
//     Produto.call(this, nome, preco);
//     this.material = material;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         configurable: false,
//         get: function() {
//             return estoque;
//         },
//         set: function(valor) {
//             if(typeof valor !== 'number') return;
//             estoque = valor;
//         }
//     });
// }
// Caneca.prototype = Object.create(Produto.prototype);
// Caneca.prototype.constructor = Caneca;

// const p1 = new Produto('Camiseta', 110);
// const camiseta = new Camiseta('Regata', 7.5, 'Verde');
// const caneca = new Caneca('Xícara', 13, 'Porcelana', 5);

// console.log(caneca);
// console.log(camiseta);
// console.log(p1);


//  Produto: VideoGame, televisão, celular
function Videogame(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Videogame.prototype.desconto = function(porcentagem) {
    return this.preco - (this.preco * (porcentagem / 100));
};
Videogame.prototype.aumento = function(porcentagem) {
    return this.preco + (this.preco * (porcentagem / 100));
};

function Televisão(nome, preco) {
    Videogame.call(this, nome, preco);
    this.nome = nome;
    this.preco = preco;
}
Televisão.prototype = Object.create(Videogame.prototype);
Televisão.prototype.constructor = Televisão;

function Celular(nome, preco) {
    Videogame.call(this, nome, preco);
    this.nome = nome;
    this.preco = preco;
}
Celular.prototype = Object.create(Videogame.prototype);
Celular.prototype.constructor = Celular;

const v1 = new Videogame('Playstation 5', 3200);
const t1 = new Televisão('SmartTv Samsung', 4500);
const c1 = new Celular('Iphone 15 Max', 6500);
c1.preco = c1.desconto(50);

console.log(v1);
console.log(t1);
console.log(c1);