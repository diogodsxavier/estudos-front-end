const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');
const sobreController = require('./controllers/sobreController');

// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rota de contato
route.get('/contato', contatoController.paginaInicial);

// Rota de SOBRE
route.get('/sobre', sobreController.paginaInicial);

module.exports = route;