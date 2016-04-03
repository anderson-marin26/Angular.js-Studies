angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) 
{
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	

	//pegando dados do servidor de uma maneira um pouco melhor
	recursoFoto.query(function(fotos)
		{
			$scope.fotos = fotos;
		}, function(erro)
		{
			console.log(erro);
		});

	//pegando dados do servidor	
	/*$http.get('v1/fotos')
	.success(function(fotos)
	{
		$scope.fotos = fotos;
	})
	.error(function(erro)
	{
		console.log(erro);
	});*/

	$scope.remover = function(foto)
	{
		recursoFoto.delete({fotoId :foto._id}, function()
			{
				var indiceFoto = $scope.fotos.indexOf(foto); //removendo da lista
				$scope.fotos.splice(indiceFoto, 1); // removendo da lista
				$scope.mensagem = 'Foto '+ foto.titulo + ' foi removida com sucesso';
			}, function(erro)
			{
				console.log(erro);
				$scope.mensagem = 'Não foi possivel remover a foto ' + foto.titulo;
			});

		//modo antigo
		/*$http.delete('v1/fotos/' + foto._id)
		.success(function()
		{
			
		})
		.error(function(erro)
		{
			
		});*/
	};
});