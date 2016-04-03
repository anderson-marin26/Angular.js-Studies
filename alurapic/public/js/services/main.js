angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider)
{
	$locationProvider.html5Mode(true); //caso o back end esteja preparado, da pra evitar o # na url atravez do html 5
	$routeProvider.when('/fotos',
	{
		templateUrl: 'partials/principal.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/new',
	{
		templateUrl: 'partials/foto.html',
		controller: 'FotoController'
	});

	$routeProvider.when('/fotos/edit/:fotoId',
	{
		templateUrl: 'partials/foto.html',
		controller: 'FotoController'
	});

	$routeProvider.otherwise(
	{
		redirectTo: '/fotos'
	});
});