// const h1 = document.querySelector('.container h1');

// function descobrirDia (diaSemana) {
//     const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
//     return diasSemana[diaSemana];

//     // switch (diasSemana) {
//     //     case 0:
//     //         return 'Domingo ';
//     //     case 1:
//     //         return 'Segunda-Feira '
//     //     case 2:
//     //         return 'Terça-Feira ';
//     //     case 3:
//     //         return 'Quarta-Feira ';
//     //     case 4:
//     //         return 'Quinta-Feira ';
//     //     case 5:
//     //         return 'Sexta-Feira ';
//     //     case 6:
//     //         return 'Sábado ';
//     //     }
// }
 
// function getDiaSemana () {
//     const diaDaSemana = new Date();
//     const result = diaDaSemana.getDay(); 
//     return result;
// }

// function getDia () {
//     const dia = new Date();
//     const result = dia.getDate();
//     return result;
// }

// function getDescobrirMes (numMes) {
//     const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
//     return meses[numMes];

//     // switch (numMes) {
//     // case 0:
//     //     return 'Janeiro';
//     // case 1:
//     //     return 'Fevereiro';
//     // case 2:
//     //     return 'Março';
//     // case 3:
//     //     return 'Abril';
//     // case 4:
//     //     return 'Maio';
//     // case 5:
//     //     return 'Junho';
//     // case 6:
//     //     return 'Julho';
//     // case 7:
//     //     return 'Agosto';
//     // case 8:
//     //     return 'Setembro';
//     // case 9:
//     //     return 'Outubro';
//     // case 10:
//     //     return 'Novembro';
//     // case 11:
//     //     return 'Dezembro';
//     // }
// }

// function getMes () {
//     const mes = new Date();
//     const result = getDescobrirMes(mes.getMonth());
//     return result;
// }

// function getAno () {
//     const ano = new Date();
//     const result = ano.getFullYear();
//     return result;
// }


// function getHora () {
//     const hora = new Date();
//     const result = hora.getHours();
//     return result;
// }

// function getMinutes () {
//     const min = new Date();
//     const result = min.getMinutes();
//     return result;
// }

// function getSeconds () {
//     const seg = new Date();
//     const result = seg.getSeconds();
//     return result;
// }

// function zeroEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function getMsg () {

//     return `${descobrirDia(getDiaSemana())}, ${getDia()} de ${getMes()} <br> de ${getAno()} ${zeroEsquerda(getHora())}:${zeroEsquerda(getMinutes())}:${zeroEsquerda(getSeconds())}`;
// }
// h1.innerHTML = getMsg();

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium'});

