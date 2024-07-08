class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    fala() {
        return nome + ' ' + ', prazer.'
    }
}

// exports.Pessoa = Pessoa;

const nome = 'Diogo';
const sobrenome = 'Daniel';

module.exports = {
    nome, sobrenome, Pessoa
};







// const nome = 'Diogo';
// const sobrenome = 'Daniel';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.ola = 'Olá Mundo!';

// // console.log(module.exports);