angular.module("eventos").controller("escolhidoCtrl",function($scope, $routeParams ,eventosAPI){

        eventosAPI.getEvento($routeParams._id).then(function(data){
            $scope.escolhido = data.data;
        });
});