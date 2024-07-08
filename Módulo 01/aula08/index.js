/**
 Luiz Otávio Miranda tem 30 anos, pesa 84 kg
 tem 1.8 de altura e seu IMC é de 25.925925925924
 Luiz Otávio nasceu em 1980
 */
const nome = 'Diogo';
const sobrenome = 'Daniel';
const idade = 19;
const peso = 110;
const alturaEmM = 1.76;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);