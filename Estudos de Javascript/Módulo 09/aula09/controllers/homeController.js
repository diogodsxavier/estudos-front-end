exports.paginaInicial = (req, res) => {
    res.send(`
         <form action="/" method="POST">
         Nome do cliente: <input type="text" name="nome"> <br>
         Outra coisa: <input type="text" name="outraCoisa">
         <button>Enviar</button>
         </form>    
    `);
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST');
};
