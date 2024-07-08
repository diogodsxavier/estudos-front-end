/*const treHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + treHoras + umDia);*/
//const data = new Date(2019, 3, 29, 17, 15, 59, 1000); // a, m, d, h, M, s, ms
/*const data = new Date(2019, 9, 18, 16, 35, 35, 900); // meses vão de 0 - 11
console.log(data.toString());*/

/*const data = new Date('2023-05-16 17:35:00.500');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da Semana', data.getDay());
console.log(data.toString());*/


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hr = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hr}:${min}:${seg}`;
}

const data = new Date();
const dataAtual = formataData(data);
console.log(dataAtual);