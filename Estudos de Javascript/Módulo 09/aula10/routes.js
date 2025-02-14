const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const sobreController = require('./src/controllers/sobreController');

// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rota de contato
route.get('/contato', contatoController.paginaInicial);

// Rota de SOBRE
route.get('/sobre', sobreController.paginaInicial);

module.exports = route;