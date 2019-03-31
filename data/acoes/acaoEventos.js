const Locais = require('../esquemas/localEsquema')
const eventoEsquema = require('../esquemas/eventoEsquema')
//const pessoaEsquema = require('../data/esquemas/pessoaEsquema')
const mongoose = require('mongoose')
const Persistencia = require('../persistencia/persistencia')
//const geraMapa = require('../../mapas/mapas');

class AcoesEventos {

    static async criarEvento(req, res, next) {
        try {
            if (!req.body) {
                res.status(400).send('Objeto inválido de requisição');
            }
            let evento = req.body;
            let _evento = await Persistencia.criarEvento(evento, eventoEsquema);
            let _o = await Persistencia.buscar(_evento.Local, Locais);
            await Locais.update({
                _id: _o._id
            }, {
                "evento": _evento._id
            })

            res.status(201).json("O Evento foi criado com sucesso");
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async consultarTodosEventos(req, res, next) {
        try {
            let evento = await Persistencia.listarTodosEventos(); //---verificar data direto no data no mongo
           
            res.json(evento);
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async consultarEvento(req, res, next) {
        try {
            // validar dados 
            if (!req.params.id) {
                res.status(400).send('Requisição inválida');
            }
            let eventoId = req.params.id;
            let evento = await Persistencia.buscarEvento(eventoId);

            if (evento === null) {
                res.json({
                    "Mensagem": "💩"
                });
            } else {
                res.json(evento);
            }
        } catch (erro) {
            res.status(500);
            next(erro);
            console.log(erro);
        }
    }

    static async alterarEvento(req, res, next) {
        let id = req.params.id;
        try {
            if (!req.body) {
                res.status(400).send('Objeto inválido de requisição');
            }
            let evento = req.body;
            let novoEvento = await Persistencia.alterar(id, evento, eventoEsquema);
            res.json({
                "Mensagem": "Evento Modificado com Sucesso! 🖖"
            });
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async deletarEvento(req, res, next) {
        try {
            // FALTA! validação de dados aqui
            if (!req.params.id) {
                res.status(400).send('Requisição inválida');
            }
            let eventoId = req.params.id;
            let evento = await Persistencia.deletar(eventoId, eventoEsquema); //--
            res.json({
                "Mensagem": "☹ Mano o babulho foi deletado!!!!"
            });
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }
}

module.exports = AcoesEventos;