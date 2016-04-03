angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams)
{
	$scope.foto = {};
	$scope.mensagem = '';

	if($routeParams.fotoId) // pegando o id da foto pra mandar pro back end
		{
			$http.get('v1/fotos/' + $routeParams.fotoId) //pegando os dados da foto
			.success(function(foto)
			{
				$scope.foto = foto;	//atribuindo isso ao array foto
			})
			.error(function(erro)
			{
				console.log(erro);
				$scope.mensagem = 'Não foi possivel obter a foto';
			});
		};

	$scope.submeter = function()
	{
		if ($scope.formulario.$valid)
		{
			if($scope.foto._id) // se tiver um id, então o usuario quer editar essa imagem
			{
				$http.put('v1/fotos/' + $scope.foto._id, $scope.foto) // comando put no REST é pra alterar algo ja existente
				.success(function()
				{
					$scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterado com sucesso';
				})
				.error(function(erro)
				{
					console.log(erro);
					$scope.mensagem = 'Não foi possivel alterar a foto ' + $scope.foto.titulo;
				});
			}else // sem id quer dizer que quer adicionar uma nova foto
			{
				$http.post('v1/fotos', $scope.foto)
				.success(function()
				{
					$scope.foto = {};
					$scope.mensagem = 'Foto cadastrada com sucesso';
				})
				.error(function(erro)
				{
					$scope.mensagem = 'Não foi possivel incluir a foto';
					console.log(erro);
				});	
			}
		}	
	};
});