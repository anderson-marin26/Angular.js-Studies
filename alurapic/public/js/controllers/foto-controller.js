angular.module('alurapic').controller('FotoController', function($scope, cadastroDeFotos, recursoFoto, $routeParams)
{
	$scope.foto = {};
	$scope.mensagem = '';

	if($routeParams.fotoId) // pegando o id da foto pra mandar pro back end
		{
			recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto)
			{
				$scope.foto = foto;
			}, function(erro)
			{
				console.log(erro);
				$scope.mensagem = 'Não foi possivel obter a foto';
			});
		}

	$scope.submeter = function()
	{
		if ($scope.formulario.$valid)
		{
			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(dados)
			{
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao) $scope.foto = {};
				//$scope.focado = true; - seria para o watch
				//$scope.$broadcast('fotoCadastrada'); solucao geral
			})
			.catch(function(dados)
			{
				$scope.mensagem = dados.mensagem;
			});
		}	
	};
});