// Métodos de instândia e estáticos

function teste() {
    console.log(this);
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Método de Instância
    aumentarVolume() {
        this.volume += 2;
    } 
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static soma(x, y) {
        console.log(this);
    }
}

const constrole1 = new ControleRemoto('Samsung');
// constrole1.aumentarVolume();
// constrole1.aumentarVolume();
// constrole1.aumentarVolume();
// console.log(constrole1);

ControleRemoto.soma();
