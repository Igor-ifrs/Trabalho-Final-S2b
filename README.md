# Trabalho-Final-S2b


## ROTAS

* GET       api/locais             todos os locais 

* GET       api/locais/idLocal     busca local pelo id

* POST      api/locais             cria local

* PATCH     api/locais/idLocal     altera local __parte ou todo__

* DELETE    api/locais/idLocal     deleta local


* GET       api/eventos            todos os eventos

* GET       api/eventos/idevento   busca evento pelo id

* POST      api/eventos            cria evento

* PATCH     api/eventos/idevento   altera evento __parte ou todo__

* DELETE    api/eventos/idevento   deleta evento


* GET       api/user               todos os users

* GET       api/user/iduser        busca user pelo id

* POST      api/user               cria user

* PATCH     api/user/iduser        altera user __parte ou todo__

* DELETE    api/user/iduser        deleta user


* EXEMPLO  [ http://localhost:3000/api/locais/5b061dd720d5a33c13e2e971](http://localhost:3000/api/locais/5b061dd720d5a33c13e2e971)


`BUG!`
#### Local Esquemas

```js
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
```
### Evento Esquema

```js
const Eventos = new Schema({
    Nome:{ type: String },
    Descricao:{type:String},
    DataInicial:{ type: Date },
    DataFinal:{ type: Date },
    DataCriacao:{type: Date, default: Date.now},
    Observacao:{ type: String },        
    Local: { type: Schema.ObjectId, ref: 'Locais', required: true },
    Criador:{ type: Schema.ObjectId, ref: 'Pessoa', required: true }
});
```
### Teste
```js
const teste = {
    "Nome": "Evento Teste",
    "Descricao": "Descrição do evento teste",
    "DataInicial":"2018-05-31T17:44:00.446Z",
    "DataFinal" : "2018-05-31T17:44:00.446Z",
    "Local": "5b061dd720d5a33c13e2e975",
    "Observacao":"uma obs do evento",
    "Criador": "5b0fad4b892a73339f437f8f"
}
```
### Pessoa

```js
const teste ={    
    "PossuiEvento":false,
    "Nome":"Igor correa da conceição",
    "Email":"icorrea@gmail.com",
    "Senha":"kkkkkk"
}
```