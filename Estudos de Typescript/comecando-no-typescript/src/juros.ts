class JurosCompostosSimulator {
    private valorInicial: number;
    private valorMensal: number;
    private taxaJurosAnual: number;
    private tempoAnos: number;

    constructor(valorInicial: number, valorMensal: number, taxaJurosAnual: number, tempoAnos: number) {
        this.valorInicial = valorInicial;
        this.valorMensal = valorMensal;
        this.taxaJurosAnual = taxaJurosAnual / 100; // Converte para decimal
        this.tempoAnos = tempoAnos;
    }

    public calcularMontanteFinal(): number {
        const meses = this.tempoAnos * 12;
        const taxaMensal = this.taxaJurosAnual / 12;

        let montante = this.valorInicial;

        for (let i = 0; i < meses; i++) {
            montante += this.valorMensal; // Adiciona o valor mensal
            montante *= 1 + taxaMensal; // Aplica os juros compostos
        }

        return montante;
    }

    public exibirResultado(): void {
        const montanteFinal = this.calcularMontanteFinal();
        console.log(`Após ${this.tempoAnos} anos, o montante final será de R$ ${montanteFinal.toFixed(2)}`);
    }
}

// Exemplo de uso
const simulador = new JurosCompostosSimulator(1000, 200, 5, 10); // Valor inicial: 1000, Valor mensal: 200, Taxa anual: 5%, Tempo: 10 anos
simulador.exibirResultado();