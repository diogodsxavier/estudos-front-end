// Declaração de função (Function hoisting)
function digaOi() {
    console.log('Oie');
}
digaOi();

// First-class objects (objetos de primeira classe)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

// function executaFuncao(funcao) {
//     funcao();
// }
// executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Sou um objeto');
    }
};
obj.falar();

