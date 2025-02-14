function f(nome, sobrenome, peso, altura) {
    return {
        nome,
        peso,
        altura,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome =  valor.join(' ');
        },

        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está falando sobre ${assunto}`;
        },

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = f('Diogo', 'Daniel', 120, 1.77);
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());