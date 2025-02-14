// class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     get nomeCompleto() {
//         return this.nome + ' ' + this.sobrenome;
//     }

//     set nomeCompleto(valor) {
//         valor = valor.split(' ');
//         this.nome = valor.shift();
//         this.sobrenome = valor.join(' ');
//     }
// }

// const p1 = new Pessoa('Diogo', 'Daniel');
// p1.nomeCompleto = 'Diogo Daniel Silva';
// console.log(p1.nome);
// console.log(p1.sobrenome);


// const _velocidade = Symbol('velocidade');
// class Carro {
//     constructor(nome) {
//         this.nome = nome;
//         this[_velocidade] = 55;
//     }

//     set velocidade(valor) {
//         console.log('SETTER');
//         if(typeof valor !== 'number') return;
//         if(valor >= 100 || valor <= 0) return;
//         this[_velocidade] = valor;
//     }

//     get velocidade() {
//         console.log('GETTER');
//         return this[_velocidade];
//     }

//     acelerar() {
//         if(this[_velocidade] >= 100) return;
//         this[_velocidade]++;
//     }

//     freia() {
//         if(this[_velocidade] <= 0 ) return;
//         this[_velocidade]--;
//     }
// }

// const c1 = new Carro('Fusca');

// // for (let i = 0; i <= 200; i++) {
// //     c1.acelerar();
// // }

// c1.velocidade = 75;
// console.log(c1.velocidade);

const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor <= 0 || valor >= 130) return;
        this[_velocidade] = valor;
    }


    get velocidade() {
        return this[_velocidade];
    } 

    acelera() {
        if(this[_velocidade] >= 130) return;
        this[_velocidade] ++;
    }

    freia() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade] --;
    }
}

const car = new Carro('Mercedes-Benz');
for(let i = 0; i <= 200; i++) {
    car.acelera();
}

car.velocidade = 55;

console.log(car);