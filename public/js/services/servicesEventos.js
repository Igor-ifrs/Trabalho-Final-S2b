angular.module("eventos").factory("eventosAPI",function($http){
    
    let _getEventos = function(){
        return $http.get("http://localhost:3000/api/eventos");
    };

    let _addEventos = function(evento){
        return $http.post("http://localhost:3000/api/eventos", evento);
    };

    let _delEventos = function(del){
        $http.delete(`http://localhost:3000/api/eventos/${del}`);
    }

    let _getEvento = function(id){
        return $http.get(`http://localhost:3000/api/eventos/${id}`);
    }

    return {
        getEventos: _getEventos,
        addEventos: _addEventos,
        delEventos: _delEventos,
        getEvento: _getEvento
    }
});

