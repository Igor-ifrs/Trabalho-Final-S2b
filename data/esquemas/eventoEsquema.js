const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Locais = require('./localEsquema'); //não sei
//const Pessoa = require('./pessoaEsquema');
//para criat um evento tem que criar uma pessoa antes
const Evento = new Schema({
    Nome: {
        type: String
    },
    Email: {
        type: String
    },
    DataInicial: {
        type: Date
    },
    DataFinal: {
        type: Date
    },
    DataCriacao: {
        type: Date,
        default: Date.now
    },
    Observacao: {
        type: String
    },
    Tipo: {
        type: String
    },
    Patrocinado: {
        type: Boolean,
        default: false
    },
    linkImg: {
        type: String,
        default: 'https://biosom.com.br/blog/wp-content/uploads/2017/03/contabilidade-em-porto-alegre.jpg.pagespeed.ce.mM2b7rNWqz.jpg'
    },
     Local: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Locais',
         required: true
     },
     vencido :{
         type: Boolean,
         default:false
     }
    //Criador:{type: Schema.ObjectId, ref: 'Pessoa', required: true}
});

module.exports = mongoose.model('Evento', Evento);