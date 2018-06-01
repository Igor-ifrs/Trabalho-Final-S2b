const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Locais = new Schema({

"Endereço":{type: String},
"Complemento":{type: String},
"Cidade":{type: String},
"Estado":{type: String},
"CódigoPostal":{type: String},
"Name":{type: String},
"Telefone":{type: String},
"Bairro":{type: String},
"Região OP":{type: String},
"URL":{type: String},
"Tipo":	{type: String},
"Categoria":[{type: String}],
"Latitude":{type: String},
"Longitude":{type: String},
"Endereço Formatado": {type: String}

});

module.exports = mongoose.model('Locais', Locais);

/**
 * ERRO AO EXPORTAR O MODELO!
 * 
 * COMO FOI IMPORTADO DO DATAPOA USEI AS MESMAS PROPIEDADES 
 * ➜ ESTUDAR COMO COVERTER TIPO...
 * Nome, data inicial, data final, id do local(puxa o endereço e os tipos pelo id), tipo(seleciona apenas 1 dos que tem no local), e observação.
 * 
 */