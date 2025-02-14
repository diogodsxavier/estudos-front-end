// capiturar do evento de submit do formulario


function calculo(dados) {
    const formulario = document.querySelector('#formulario');
    const peso = document.querySelector('.input-peso');
    const altura = document.querySelector('.input-altura');  
    
    function calculadora(evento) {
        evento.preventDefault();

        //peso/altura * altura
        const resultado = peso.value / altura.value * altura.value;

        
        if (resultado < 18.5) {
            formulario.innerHTML = `Seu Imc é de ${resultado.toFixed(2)}, (Abaixo do peso)`;
        } else if (resultado >= 18.5 && resultado <= 24.9){
            formulario.innerHTML = `Seu Imc é de ${resultado.toFixed(2)}, (Peso Normal)`;
        } else if (resultado >= 25 &&  resultado <= 29.9) {
            formulario.innerHTML = `Seu Imc é de ${resultado.toFixed(2)}, (Sobrepeso)`;
        } else if (resultado >= 30 && resultado <= 34.9){
            formulario.innerHTML = `Seu Imc é de ${resultado.toFixed2}, (Obesidade Grau 1)`;
        } else if (resultado >= 35 && resultado <= 39.9){
            formulario.innerHTML = `Seu Imc é de ${resultado.toFixed(2)}, (Obesidade Grau 2)`;
        } else if (resultado > 40) {
            formulario.innerHTML = `Seu Imc é de ${resultado.toFixed(2)}, (Obesidade Grau 3)`;
        } else {
            formulario.innerHTML = `(Calculo inválido)`;
        }

        console.log(resultado);
        
    }
    formulario.addEventListener('submit', (calculadora));
}
calculo();

