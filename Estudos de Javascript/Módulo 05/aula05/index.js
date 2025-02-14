function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('Diogo', 'D.');
const p2 = new Pessoa('Thiago', 'M.');
const data = new Date();

console.dir(p1);
console.dir(data);