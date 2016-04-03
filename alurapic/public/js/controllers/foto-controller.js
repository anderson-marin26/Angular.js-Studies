angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams)
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
			if($scope.foto._id) // se tiver um id, então o usuario quer editar essa imagem
			{
				recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, function()
				{
					$scope.mensagem = 'A foto foi alterado com sucesso';
				},function(erro)
				{
					console.log(erro);
					$scope.mensagem = 'Não foi possivel alterar a foto';
				});
				//jeito antigo
				/*$http.put('v1/fotos/' + $scope.foto._id, $scope.foto) // comando put no REST é pra alterar algo ja existente
				.success(function()
				{
					$scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterado com sucesso';
				})
				.error(function(erro)
				{
					console.log(erro);
					$scope.mensagem = 'Não foi possivel alterar a foto ' + $scope.foto.titulo;
				});*/

			}else // sem id quer dizer que quer adicionar uma nova foto
			{
				recursoFoto.save($scope.foto, function()
				{
					$scope.foto = {};
					$scope.mensagem = 'Foto incluida com sucesso';
				}, function(erro)
				{
					$scope.mensagem = 'Não foi possivel incluir a foto';
					console.log(erro);
				});

				/*
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
				});*/	
			}
		}	
	};
});