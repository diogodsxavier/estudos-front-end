class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
};

const p1 = new Pessoa('Diogo', 'Daniel');
const p2 = new Pessoa2('Thiago', 'Machado');

class Blackout {
    constructor(i1, i2, i3) {
        this.i1 = i1;
        this.i2 = i2;
        this.i3 = i3;
    }

    fala() {
        return ` O grupo 1 é ${this.i1}, ${this.i2} e ${this.i3}`;
    }

    fala2() {
        return ` O grupo 2 é ${this.i1}, ${this.i2} e ${this.i3}`;
    }
}

const bkt = new Blackout('Diogo', 'Theo', 'Enzo');
console.log(bkt);
