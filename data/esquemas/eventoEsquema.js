const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Locais = require('./localEsquema');//não sei 
const Pessoa = require('./pessoaEsquema');
//para criat um evento tem que criar uma pessoa antes
const Evento = new Schema({
    Nome:{ type: String },
    Descricao:{type:String},
    DataInicial:{ type: Date },
    DataFinal:{ type: Date },
    DataCriacao:{type: Date, default: Date.now},
    Observacao:{ type: String },        
    Local: { type: Schema.ObjectId, ref: 'Locais', required: true },
    Criador:{ type: Schema.ObjectId, ref: 'Pessoa', required: true }
});

module.exports = mongoose.model('Evento', Evento);

