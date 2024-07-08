function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Diogo', 'Daniel');
delete p1.nome;
p1.nome = 'Xavieer';
p1.sobrenome = 'Steve';
const p2 = new Pessoa('Denize', 'Xavier');
console.log(p2);



function criaPessoa(nome, sobrenome) {       
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${nome} ${sobrenome}`;
        }
    };
}

const p = criaPessoa('Diogo', 'Daniel');
console.log(p.nomeCompleto);



const pessoa1 = new Object();
pessoa1.nome = 'Diogo';
pessoa1.sobrenome = 'Daniel';
pessoa1.idade = 72;
pessoa1.falaNome = function() {
    return `${this.nome} está falando seu nome`;
};
pessoa1.getDataNascimento = function() {
    const data = new Date();
    return data.getFullYear() - this.idade;
};

console.log(pessoa1.falaNome());

for(let chave in pessoa1) {
    console.log(pessoa1[chave]);
};



const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Daniel'
};

const chave = 'sobrenome';
console.log(pessoa[chave]);