const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome,
            enumerable: true,
            writable: true,
            configurable: true
            //  Getter e setter também pode usar aqui,
        },

        sobrenome: {
            value: sobrenome,
            writable: true,
            configurable: true,
            enumerable: true
        }
    });
}

const p1 = criaPessoa('Diogo', 'Daniel');
const p2 = criaPessoa('Denize', 'Xavier');
console.log(p2);