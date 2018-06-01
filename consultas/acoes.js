const locaisEsquema = require('../data/esquemas/localEsquema')
const eventoEsquema = require('../data/esquemas/eventoEsquema')
const pessoaEsquema = require('../data/esquemas/pessoaEsquema')

const Persistencia = require('../data/persistencia');

class Acoes {

    static async consultarTodosLocais(req, res, next) {
        try {
            let locais = await Persistencia.listarTodos(locaisEsquema);
            res.json(locais);
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async consultarLocal(req, res, next) {
        try {
            // validar dados 
            if (!req.params.id) {
                res.status(400).send('Requisição inválida');
            }
            let localId = req.params.id;
            let local = await Persistencia.buscar(localId, locaisEsquema); //---
            if (local === null) {
                res.json({
                    "Mensagem": "💩"
                });
            } else {
                res.json(local);
            }
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async inserirLocal(req, res, next) {
        try {
            if (!req.body) { //acho que sempre passa
                res.status(400).send('Objeto inválido de requisição');
            }
            let local = req.body;
            let novoLocal = await Persistencia.criarLocal(local);
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
            let local = await Persistencia.deletar(localId, locaisEsquema); //--
            res.json({
                "Mensagem": "☹ Mano o babulho foi deletado!!!!"
            });
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async alterarLocal(req, res, next) {
        let id = req.params.id;
        try {
            if (!req.body) {
                res.status(400).send('Objeto inválido de requisição');
            }
            let local = req.body;
            let novoLocal = await Persistencia.alterarLocal(id, local); //aqui!            
            res.json(novoLocal);
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }
    
    //=============================================================

    static async consultarPessoas(req, res, next) {
        try {
            let pessoa = await Persistencia.listarTodos(pessoaEsquema); //---
            res.json(pessoa);
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async consultarPessoa(req, res, next) {
        try {
            // validar dados 
            if (!req.params.id) {
                res.status(400).send('Requisição inválida');
            }
            let pessoaId = req.params.id;
            let pessoa = await Persistencia.buscar(pessoaId, pessoaEsquema); //---
            if (pessoa === null) {
                res.json({
                    "Mensagem": "💩"
                });
            } else {
                res.json(pessoa);
            }
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async inserirPessoa(req, res, next) {
        try {
            if (!req.body) {
                res.status(400).send('Objeto inválido de requisição');
            }
            let pessoa = req.body;
            let novapessoa = await Persistencia.criarPessoa(pessoa);
            res.status(201).json(novapessoa);
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async alterarPessoa(req, res, next) {
        let id = req.params.id;
        try {
            if (!req.body) {
                res.status(400).send('Objeto inválido de requisição');
            }
            let pessoa = req.body;
            let novoPessoa = await Persistencia.alteraPessoa(id, pessoa); //aqui!            
            res.json(novoPessoa);
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async deletarPessoa(req, res, next) {
        try {
            // FALTA! validação de dados aqui
            if (!req.params.id) {
                res.status(400).send('Requisição inválida');
            }
            let pessoaId = req.params.id;
            let evento = await Persistencia.deletar(pessoaId, pessoaEsquema); //--
            res.json({
                "Mensagem": "☹ Mano o babulho foi deletado!!!!"
            });
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    //=============================================================

    static async inserirEvento(req, res, next) {
        try {
            if (!req.body) {
                res.status(400).send('Objeto inválido de requisição');
            }
            let evento = req.body;
            let novoEvento = await Persistencia.criarEvento(evento);
            res.status(201).json(novoEvento);
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async consultarTodosEventos(req, res, next) {
        try {
            let evento = await Persistencia.listarTodos(eventoEsquema); //---
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
            let evento = await Persistencia.buscar(eventoId, eventoEsquema);
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
        }
    }

    static async alterarEvento(req, res, next) {
        let id = req.params.id;
        try {
            if (!req.body) {
                res.status(400).send('Objeto inválido de requisição');
            }
            let evento = req.body;
            let novoEvento = await Persistencia.alteraEvento(id, evento); //aqui!            
            res.json(novoEvento);
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
// console.log('----------------TESTE-☹-------------------');
// console.log(Object.keys(locaisEsquema.schema.obj));
// console.log('------------------------------------------');

module.exports = Acoes;