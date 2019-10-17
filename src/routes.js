const express = require('express');

const routes = express.Router();

// Controllers
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

// Rotas de Usuário
routes.get('/users', UserController.index); //Listar todos os Usuários
routes.post('/users', UserController.store); //Criar novo Usuário

// Rotas de Endereço
routes.get('/users/:user_id/addresses', AddressController.index); //Listar o endereço do usuario
routes.post('/users/:user_id/addresses', AddressController.store); //Criar um endereço e relacionar ele a um user


module.exports = routes;