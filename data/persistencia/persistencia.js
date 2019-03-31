const Locais = require('../esquemas/localEsquema');
//const Pessoa = require('../esquemas/pessoaEsquema');
const Evento = require('../esquemas/eventoEsquema');

class Persistencia {

    static async criar(documento, esquema) {
        let novoDocumento = new esquema();
        let atrib = Object.getOwnPropertyNames(documento);
        atrib.forEach(el => {
            novoDocumento[el] = documento[el];
        });
        return novoDocumento.save();
    }
    static async criarEvento(documento, esquema) {
        let novoDocumento = new esquema();
        let atrib = Object.getOwnPropertyNames(documento);
        atrib.forEach(el => {
            novoDocumento[el] = documento[el];
        });
//
        return novoDocumento.save();
    }
    //revisado, podia validar se os atributos estão corretos 
    //novoDocumento.atributo contem documento.atributo
    //Object.keys(eventoEsquema.schema.obj));paths
    static async buscar(id, rota) { // buscar
        let consulta = rota.findById(id).lean();
        return consulta.exec();
    } //revisado

    static async deletar(id, esquema) {
        let consulta = esquema.findById(id);
        return consulta.remove();
    } //revisado validar melhor

    static async alterar(id, documento, esquema) {
        let documentoAlterar = await esquema.findById(id);
        let atrib = Object.getOwnPropertyNames(documento);
        atrib.forEach(el => {
            documentoAlterar[el] = documento[el];
        });
        delete documentoAlterar._id;
        delete documentoAlterar.__v;
        documentoAlterar.save();
    } //revisado 

    static async listar(rota) {
        let consulta = rota.find().lean();
        return consulta.exec();
    } //revisado

    static async listarTodosEventos() {
        let bbw = new Date();
        console.log(bbw);
        
        let consulta = Evento.find({
            "DataFinal": {
                $gte: bbw
            }
        }).lean();
        return consulta.populate('Local').exec();
        
    } //revisado eventos tem populate não quis generalizar

    static async buscarEvento(id) {
        let consulta = Evento.findOne({
            _id: id
        });
        return consulta.populate('Local').exec();
    } //diferente por causa do populate

    static async pesquisa(rota) {
        let consulta = rota.find();
        return consulta.count();
    }

}


module.exports = Persistencia;

//console.log('----------------ATENÇÃO A TROCA DE NOMES DOS ATRIBUTOS DE LOCAIS--☹-------------------');
//console.log(Object.keys(Locais.schema.obj));
//console.log(Object.keys(eventoEsquema.schema.obj));paths
//console.log('------------------------------------------')