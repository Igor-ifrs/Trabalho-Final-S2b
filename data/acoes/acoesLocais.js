const locaisEsquema = require('../esquemas/localEsquema')
//const eventoEsquema = require('../data/esquemas/eventoEsquema')
//const pessoaEsquema = require('../data/esquemas/pessoaEsquema')
const mongoose = require('mongoose')
const Persistencia = require('../persistencia/persistencia')


class AcoesLocais {

    static async consultarTodosLocais(req, res, next) {
        try {
            let locais = await Persistencia.listar(locaisEsquema);
            if (locais) {
                res.json(locais);
            } else {
                res.json({
                    "Mensagem": "💩",
                    "erro": "Resposta inválida!"
                });
            }
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    } //revisado

    static async consultarLocal(req, res, next) {
        try {
            let localId = req.params.id;
            let idValido = mongoose.Types.ObjectId.isValid(localId);
            if (idValido) {
                let local = await Persistencia.buscar(localId, locaisEsquema);
                if (local) {
                    res.json(local);                    
                } else {
                    res.json({
                        "Mensagem": "💩",
                        "erro": "Resposta inválida!"
                    });
                }
            } else {
                res.json({
                    "Mensagem": "💩",
                    "erro": "Erro ao passar Id"
                });
            }
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    } //revisado 

    static async inserirLocal(req, res, next) {
        try {
            if (!req.body) {
                res.status(400).send('Objeto inválido de requisição');
            }
            let local = req.body;
            let novoLocal = await Persistencia.criar(local, locaisEsquema);
            res.status(201).json(novoLocal);
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async deletarLocal(req, res, next) {
        try {
            // FALTA! validação de dados aqui
            if (!req.params.id) {
                res.status(400).send('Requisição inválida');
            }
            let localId = req.params.id;
            let local = await Persistencia.deletar(localId, locaisEsquema);
            res.json({
                "Mensagem": "☹ Mano o babulho foi deletado!!!!"
            });
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async alterarLocal(req, res, next) {
        try {
            if (!req.body) {
                res.status(400).send('Objeto inválido de requisição');
            }
            let id = req.params.id;
            let local = req.body;
            //let novoLocal = await Persistencia.alterar(id, local, locaisEsquema);
            await Persistencia.alterar(id, local, locaisEsquema);
            res.status(200).json({
                "Mensagem": "Alterado com sucesso"
            });

        } catch (erro) {
            console.log(erro);
            res.status(500);
            next(erro);
        }
    } //revisado

    


}


module.exports = AcoesLocais;