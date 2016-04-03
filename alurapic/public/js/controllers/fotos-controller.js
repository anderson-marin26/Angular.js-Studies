angular.module('alurapic').controller('FotosController', function($scope, $http) 
{
	$scope.fotos = [];
	$scope.filtro = '';

	//pegando dados do servidor	
	$http.get('v1/fotos')
	.success(function(fotos)
	{
		$scope.fotos = fotos;
	})
	.error(function(erro)
	{
		console.log(erro);
	});

	/*
	//fazendo requisição pra API
	var promise = $http.get('v1/fotos');
	//como o $http nao sabe quanto tempo o servidor vai demorar pra responder, use a funcao a seguir pra ele deixar o resto do codigo ser executado em quanto ele trabalha
	promise.then(function(retorno)
	{
		$scope.fotos = retorno.data;
	}).catch(function(error)
	{
		console.log(error);
	});
	*/
});