const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const locaisEsquema = require('./localEsquema');
const eventoEsquema = require('./eventoEsquema');

const Pessoa = new Schema({
    Nome:{ type: String },
    Email:{type:String, lowercase: true, trim: true},
    Telefone:{ type: String },
    PossuiEvento:{ type: Boolean, default: false },
    Senha:{type: String}//por enquanto
});


module.exports = mongoose.model('Pessoa', Pessoa);
