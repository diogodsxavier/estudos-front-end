const nome = 'Diogo';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Xavier';
    falaNome();
}

usaFalaNome();