// import { combineRequests } from "css-loader/dist/utils";

export default class ValidaCpf {
    constructor(cpfEnviado) {
        this.cpfEnviado = cpfEnviado;
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length  !== 11) return false;
        if(this.isSequencia()) return false;
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.criaDigito(cpfParcial);
        const digito2 = ValidaCpf.criaDigito(cpfParcial + digito1);
        const novoCpf = cpfParcial + digito1 + digito2;
        return novoCpf === this.cpfLimpo;
    }

    static criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    } 

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
}