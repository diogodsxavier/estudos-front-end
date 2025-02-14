const show = {
    tenor:'Andrea Bocelli',
    local:'Alianz Parque',
    data: 14,

    frase() {
        console.log(`Eu vou no show do Tenor ${this.tenor} no ${this.local} no dia ${this.data} de maio de 2024`);
    },

    incrementarData() {
        show.data++;
    }
};        

show.frase();
show.incrementarData();
show.frase();
show.incrementarData();
show.frase();
show.incrementarData();




/*const bandas = {
    banda1: 'Scorpions',
    banda2: 'Audioslave',
    banda3: 'Black Sabbath',
    banda4: 'Judas Priest',
    data: 25,

    show() {
        console.log(`As bandas ${this.banda1} e ${this.banda4} vão fazer um show aqui no Brasil dia ${this.data} de Dezembro em São Paulo!`);
    },

    incrementarData() {
        ++this.data;
    }
};    

bandas.show();
bandas.incrementarData();
bandas.show();
bandas.incrementarData();
bandas.show();
bandas.incrementarData();
bandas.show();
bandas.incrementarData();
bandas.show();*/


/*function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Diogo', 'Daniel', 19);
const pessoa2 = criaPessoa('Dherik', 'Silva', 15);
const pessoa3 = criaPessoa('José', 'Carlos', 44);
const pessoa4 = criaPessoa('Denize', 'Da Silva', 38);
const pessoa5 = criaPessoa('Thais', 'Silva', 25);

console.log(pessoa5.nome, pessoa2.nome, pessoa3.idade);*/


/*const pessoa1 = {
    nome: 'Diogo',
    sobrenome:'Daniel',
    idade:19,
};

const pessoa2 = {
    nome: 'Dherik',
    sobrenome:'Silva',
    idade:15,
};

console.log(pessoa1.nome);
console.log(pessoa2.nome);*/