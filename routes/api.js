const express = require('express')
const bodyParser = require('body-parser')
const acoesLocais = require('../data/acoes/acoesLocais')
const acoesEventos = require('../data/acoes/acaoEventos')
const acaoPesquisa = require('../data/acoes/acaoPesquisa')
const router = express.Router()
const jsonParser = bodyParser.json()

// Rotas Locais 
router.get('/locais', acoesLocais.consultarTodosLocais)
router.get('/locais/:id', acoesLocais.consultarLocal)
router.post('/locais', jsonParser, acoesLocais.inserirLocal)
router.patch('/locais/:id', jsonParser, acoesLocais.alterarLocal)
router.delete('/locais/:id', acoesLocais.deletarLocal)

// Rotas Eventos
router.get('/eventos', acoesEventos.consultarTodosEventos)
router.get('/eventos/:id', acoesEventos.consultarEvento)
router.post('/eventos', jsonParser, acoesEventos.criarEvento)
router.patch('/eventos/:id', jsonParser, acoesEventos.alterarEvento)
router.delete('/eventos/:id', acoesEventos.deletarEvento)

// Rota pesquisa

router.get('/',acaoPesquisa.pesquisa);


//Rota Pessoas 
/*
router.get('/user', acoes.consultarPessoas)
router.get('/user/:id', acoes.consultarPessoa)
router.post('/user', jsonParser, acoes.inserirPessoa)
router.patch('/user/:id', jsonParser, acoes.alterarPessoa)
router.delete('/user/:id', acoes.deletarPessoa)
*/
module.exports = router;