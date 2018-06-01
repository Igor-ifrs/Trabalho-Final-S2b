const Locais = require('./esquemas/localEsquema');
const Pessoa = require('./esquemas/pessoaEsquema');
const Evento = require('./esquemas/eventoEsquema');
class Persistencia {
    /*
    Metodo generico listartodos buscar deletar
    renomear para controller?
    */
    static async listarTodos(rota) {
        let consulta = rota.find().lean();
        return consulta.exec();
    }

    static async buscar(id, rota) {
        let consulta = rota.findById(id).lean();
        return consulta.exec();
    }

    static async deletar(id, rota) {
        let consulta = rota.findById(id);
        return consulta.remove();

    }
    
    static async criarLocal(local) {

        let novoLocal = new Locais();
        novoLocal["Endereço"] = local["Endereço"];
        novoLocal["Complemento"] = local["Complemento"];
        novoLocal["Cidade"] = local["Cidade"];
        novoLocal["Estado"] = local["Estado"];
        novoLocal["CódigoPostal"] = local["CódigoPostal"];
        novoLocal["Name"] = local["Name"];
        novoLocal["telefone"] = local["telefone"];
        novoLocal["Bairro"] = local["Bairro"]
        novoLocal["Região OP"] = local["Região OP"];
        novoLocal["URL"] = local["URL"];
        novoLocal["Tipo"] = local["Tipo"];
        novoLocal["Categoria"] = local["Categoria"];
        novoLocal["Latitude"] = local["Latitude"];
        novoLocal["Longitude"] = local["Longitude"];
        novoLocal["Endereço Formatado"] = local["Endereço Formatado"];

        return novoLocal.save();
    }
    
    static async alterarLocal(id, local) {
        let localAlterar = await Locais.findById(id);
        localAlterar["Endereço"] = local["Endereço"];
        localAlterar["Complemento"] = local["Complemento"];
        localAlterar["Cidade"] = local["Cidade"];
        localAlterar["Estado"] = local["Estado"];
        localAlterar["CódigoPostal"] = local["CódigoPostal"];
        localAlterar["Name"] = local["Name"];
        localAlterar["telefone"] = local["telefone"];
        localAlterar["Bairro"] = local["Bairro"]
        localAlterar["Região OP"] = local["Região OP"];
        localAlterar["URL"] = local["URL"];
        localAlterar["Tipo"] = local["Tipo"];
        localAlterar["Categoria"] = local["Categoria"];
        localAlterar["Latitude"] = local["Latitude"];
        localAlterar["Longitude"] = local["Longitude"];
        localAlterar["Endereço Formatado"] = local["Endereço Formatado"];
        return localAlterar.save();
    }
    
    static async criarPessoa(pessoa) {
        let novaPessoa = new Pessoa();
        novaPessoa.Nome = pessoa.Nome;
        novaPessoa.Email = pessoa.Email;
        novaPessoa.telefone = pessoa.telefone;
        novaPessoa.Senha = pessoa.Senha;
        return novaPessoa.save();
    }

    static async alteraPessoa(id, pessoa) {
        let pessoaAlterada = await Pessoa.findById(id);
        pessoaAlterada.Nome = pessoa.Nome;
        pessoaAlterada.Email = pessoa.Email;
        pessoaAlterada.telefone = pessoa.telefone;
        pessoaAlterada.Senha = pessoa.Senha;
        return pessoaAlterada.save();


    }

    static async criarEvento(evento) {
        let novoEvento = new Evento();
        novoEvento.Nome = evento.Nome;
        novoEvento.Descricao = evento.Descricao;
        novoEvento.DataInicial = evento.DataInicial;
        novoEvento.DataFinal = evento.DataFinal;
        novoEvento.Observacao = evento.Observacao;
        novoEvento.Local = evento.Local;
        novoEvento.Criador = evento.Criador;

        return novoEvento.save();
    }
    
    static async alteraEvento(id, evento) {
        let eventoAleterado = await Evento.findById(id);
        eventoAleterado.Nome = evento.Nome;
        eventoAleterado.Descricao = evento.Descricao;
        eventoAleterado.DataInicial = evento.DataInicial;
        eventoAleterado.DataFinal = evento.DataFinal;
        eventoAleterado.Observacao = evento.Observacao;
        eventoAleterado.Local = evento.Local;
        eventoAleterado.Criador = evento.Criador;
        
        return eventoAleterado.save();
    }
}
module.exports = Persistencia;