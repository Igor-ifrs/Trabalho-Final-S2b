const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Evento = require('./eventoEsquema')
const Locais = new Schema({

endereco:{ type: String },
complemento:{ type: String },
cidade:{ type: String },
estado:{ type: String },
codigopostal:{ type: String },
name: {type: String },
telefone:{ type: String },
bairro:{ type: String },
regiaoOP :{ type: String },
url:{ type: String },
tipo:	{ type: String },
categoria:[{ type: String }],
latitude:{type: Number },
longitude:{ type: Number},
enderecoFormatado: { type: String },
evento: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Locais'
}]
});

module.exports = mongoose.model('Locais', Locais);






/**
 * ERRO AO EXPORTAR O MODELO!
 * 
 * COMO FOI IMPORTADO DO DATAPOA USEI AS MESMAS PROPIEDADES 
 * ➜ ESTUDAR COMO COVERTER TIPO...
 * Nome, data inicial, data final, id do local(puxa o endereço e os tipos pelo id), tipo(seleciona apenas 1 dos que tem no local), e observação.
 * 
 * 
 * 
 * 
 */
