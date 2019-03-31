const locaisEsquema = require('../esquemas/localEsquema')
const eventoEsquema = require('../esquemas/eventoEsquema')
const Persistencia = require('../persistencia/persistencia')
const geraMapa = require('../../mapas/mapas')
const mongoose = require('mongoose')


class AcaoPesquisa {

    static async pesquisa(req, res, next) {
        let pesq = req.query.pesquisa;
        let mapaEvento = req.query.mapaEvento;

        try {
            if (!pesq && !mapaEvento) {
                res.json({
                    "Mensagem": "Pesquisa inválida"
                })
            } else if (pesq) {
                let resp = null;
                switch (pesq) {

                    case "totais":
                        let respL = await Persistencia.pesquisa(locaisEsquema)
                        let respE = await Persistencia.pesquisa(eventoEsquema)
                        res.json({"Locais": respL, "Eventos":respE})
                        break;                    

                    case "mapaLocal":
                        resp = await Persistencia.listar(locaisEsquema)
                        let mapaLocais = await geraMapa.locais(resp)
                        res.json(mapaLocais)
                        break;

                    default:
                        res.json({
                            "Mensagem": "-VAZIO-"
                        })
                        break;
                }
            } else if (mapaEvento) {
                let resp = await Persistencia.buscarEvento(mapaEvento);
                console.log(resp);
                
                let mapaE = await geraMapa.evento(resp);
                res.json(mapaE)
            }
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

}
/*
console.log('NOVAS ROTAS######################################################');
console.log('localhost:3000/api/?pesquisa=eventos');
console.log('localhost:3000/api/?pesquisa=locais');
console.log('localhost:3000/api/?pesquisa=mapaLocal');
console.log('http://localhost:3000/api/?mapaEvento=5b2018f19a69762ed87f6642');
*/


module.exports = AcaoPesquisa;