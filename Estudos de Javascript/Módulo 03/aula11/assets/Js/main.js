function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            };
        })
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.realizaConta();
        })
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                return;
            }
            
            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();

// function Blackout() {
//     const integrantes = ['Diogo', 'Luiz', 'Otávio', 'Theo', 'Samuel', 'Thiago Machado', 'Enzo', 'Thiago Freitas', 'Bruno', 'Ryan'];
    
//     this.bkt = () => {
//         const lista = {
//             integrante1: integrantes[0],
//             integrante2: integrantes[1],
//             integrante3: integrantes[2],
//             integrante4: integrantes[3],
//             integrante5: integrantes[4],
//             integrante6: integrantes[5],
//             integrante7: integrantes[6],
//             integrante8: integrantes[7],
//             integrante9: integrantes[8],
//             integrante10: integrantes[9]
//         };

//         return lista;
//     }
// }

// const dados = new Blackout();
// console.log(dados.bkt());







// function criaCalculadora() {
//     return {
//         display: document.querySelector('.display'),

//         inicia() {
//             this.cliqueBotoes();
//             this.pressionaEnter();
//         },

//         pressionaEnter() {
//             this.display.addEventListener('keyup', e => {
//                 //if(e.keyCode === 13) {
//                     this.realizaConta();
//                 }
//             });
//         },

//         clearDisplay() {
//             this.display.value = '';
//         },

//         apagaUm() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         realizaConta() {
//             let conta = this.display.value;

//             try {
//                 conta = eval(conta);

//                 if(!conta) {
//                     alert('Conta inválida');
//                     return;
//                 }

//                 this.display.value = String(conta);
//             } catch (e) {
//                 alert('Conta inválida');
//                 return;
//             }
//         },
        
//         cliqueBotoes() {
//             document.addEventListener('click', (e) => {
//                 const el = e.target;

//                 if(el.classList.contains('btn-num')) {
//                     this.btnParaDisplay(el.innerText);
//                 }

//                 if(el.classList.contains('btn-clear')) {
//                     this.clearDisplay();
//                 }

//                 if(el.classList.contains('btn-del')) {
//                     this.apagaUm();
//                 }

//                 if(el.classList.contains('btn-eq')) {
//                     this.realizaConta();
//                 }
//             })
//         },

//         btnParaDisplay(valor) {
//             this.display.value += valor;
//         }
//     };
//  }

//  const calculadora = criaCalculadora();
//  calculadora.inicia();