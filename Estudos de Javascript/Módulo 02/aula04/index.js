/*
    0 - 11 -> Bom dia
    12 - 17 -> Boa tarde
    18 - 23 -> Boa noite
 */

const hora = 18;

if (hora >=0 && hora <=11) {
    console.log('Bom Dia!');
} else if (hora >=12 && hora <=17) {
    console.log('Boa Tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite!');
} else {
    console.log('Horário inválido');
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}