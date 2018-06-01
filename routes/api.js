const express = require('express');
const bodyParser = require('body-parser');
const acoes = require('../consultas/acoes');
const router = express.Router();
const jsonParser = bodyParser.json();

// Rotas Locais 
router.get('/locais', acoes.consultarTodosLocais);
router.get('/locais/:id', acoes.consultarLocal);
router.post('/locais', jsonParser, acoes.inserirLocal);
router.patch('/locais/:id', jsonParser, acoes.alterarLocal);
router.delete('/locais/:id', acoes.deletarLocal);

// Rotas Eventos
router.get('/eventos', acoes.consultarTodosEventos);
router.get('/eventos/:id', acoes.consultarEvento);
router.post('/eventos', jsonParser, acoes.inserirEvento);
router.patch('/eventos/:id', jsonParser, acoes.alterarEvento);
router.delete('/eventos/:id', acoes.deletarEvento);

//Rota Pessoas 
router.get('/user', acoes.consultarPessoas);
router.get('/user/:id', acoes.consultarPessoa);
router.post('/user', jsonParser, acoes.inserirPessoa);
router.patch('/user/:id', jsonParser, acoes.alterarPessoa);
router.delete('/user/:id', acoes.deletarPessoa);
module.exports = router;