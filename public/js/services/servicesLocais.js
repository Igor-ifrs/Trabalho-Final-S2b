angular.module("eventos").factory("locaisAPI",function($http){
    
    let _getLocais = function(){
        return $http.get("http://localhost:3000/api/locais");
    };
    return {
        getLocais: _getLocais
    }
});