angular.module("eventos").config(function ($routeProvider) {
	
	$routeProvider.when("/eventos", {
		templateUrl: "eventos.html",
		controller: "eventosctrl",
	});

	$routeProvider.when("/escolhido/:_id", {
		templateUrl: "escolhidos.html",
		controller: "escolhidoCtrl",
	});

	$routeProvider.when("/novoEvento", {
		templateUrl: "novoEvento.html",
		controller: "eventosctrl",
	});
	$routeProvider.when("/home", {
		templateUrl: "home.html",
		controller: "eventosctrl",
	});
	$routeProvider.when("/destaques", {
		templateUrl: "destaques.html",
		controller: "eventosctrl",
	});

	
	
	$routeProvider.otherwise({redirectTo: "/home"});//eventos
	//$locationProvider.html5Mode(true).hashPrefix('!');
});