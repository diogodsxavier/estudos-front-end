function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método');
    }
}

const p1 = new Pessoa('Diogo', 'Daniel');
const p2 = new Pessoa('Dherik', 'Xavier');

p2.metodo();