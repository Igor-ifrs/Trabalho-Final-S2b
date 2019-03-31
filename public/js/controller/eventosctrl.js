angular.module("eventos").controller("eventosctrl", function ($scope, eventosAPI, locaisAPI) {
    $scope.app = "Eventos";

    //funções de Eventos
    $scope.adicionarEvento = function (evento) {
        let momentEventoIni = new Date(evento.DataInicial);
        let momentEventoFim = new Date(evento.DataFinal);
        let momentHoje = new Date();

        if (moment(momentEventoIni).isBefore(momentHoje)) {
            alert(`A data do inicio do evento deve ser posterior a data de Hoje`)
        } else if (moment(momentEventoFim).isBefore(momentEventoIni)) {
            alert(`A data do Inicio deve ser anterior ao Final do evento`);
        } else {
            eventosAPI.addEventos(evento).then(function (date, status) {
                alert(`Evento cadastrado com sucesso! Parabéns`)
                delete $scope.evento;
            })
        }
    };

    let carregarEventos = function () {
        let patrocinado = [];
        eventosAPI.getEventos().then(function (data, status) {
            data.data.map(e => {
                if (e.Patrocinado) {
                    patrocinado.push(e);
                }
            })
            $scope.patro = patrocinado;
            $scope.eventos = data.data;
        })
    };

    /*let deletarAntigos = function(){
        eventosAPI.getEventos().then(function(data, status){
            let i = 0;
            for(i=0; i<data.data.length;i++){
                let momentEvento = new Date(data.data[i].DataFinal);
                let momentHoje = new Date();
                if (moment(momentEvento).isBefore(momentHoje)){
                    eventosAPI.delEventos(data.data[i]._id);
                }
            }
        });
        return carregarEventos()
    }; */


    //funções de Locais
    let carregarLocais = function () {
        locaisAPI.getLocais().then(function (data, status) {
            console.log(status);
            
            $scope.locais = data.data;
        });
    };

    initMap();
    carregarEventos();
    carregarLocais();
});