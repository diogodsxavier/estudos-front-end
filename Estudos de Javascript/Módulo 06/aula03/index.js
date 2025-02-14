// // Herança com Classes
// class DispositivoEletronico {
//     constructor(nome) {
//         this.nome = nome;
//         this.ligado = false;
//     }

//     ligar() {
//         if(this.ligado) {
//             console.log(this.nome + ' já ligado');
//         }

//         this.ligado = true;
//     }

//     desligar() {
//         if(!this.ligado) {
//             console.log(this.nome + ' já desligado');
//         }

//         this.ligado = false;
//     }
// }

// class Celular extends DispositivoEletronico {
//     constructor(nome, cor, modelo) {
//         super(nome);
//         this.cor = cor;
//         this.modelo = modelo;
//     }
// }

// class Tablet extends DispositivoEletronico {
//     constructor(nome, temWifi) {
//         super(nome);
//         this.temWifi = temWifi;
//     }

//     ligar() {
//         console.log('Olha, Você alterou o método ligar.');
//     }
// }

// const c1 = new Celular('Samsung', 'Azul', 'Galaxy S22 Ultra');
// console.log(c1);


// const t1 = new Tablet('Samsung Tab S', true);
// t1.ligar();
// t1.ligar();

class Lideranca {
    constructor(lider1, lider2) {
        this.lider1 = lider1;
        this.lider2 = lider2;
    }

    fala() {
        console.log(`Os líderes são ${this.lider1} e ${this.lider2}`);
    }
}

class Gerentes extends Lideranca {
    constructor(lider1, lider2, lider3, lider4) {
        super(lider1, lider2);
        this.lider3 = lider3;
        this.lider4 = lider4;
    }

    fala() {
        console.log(`Os gerentes são ${this.lider1}, ${this.lider2}, ${this.lider3} e ${this.lider4}`);
    }
}

const b1 = new Lideranca('Diogo', 'Luiz');
const g1 = new Gerentes('Machado', 'Theo', 'Otávio', 'Bruno');
g1.fala();