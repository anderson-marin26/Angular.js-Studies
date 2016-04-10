angular.module('minhasDiretivas', [])
.directive('meuPainel', function()
{
	var ddo = {}; //criando a variavel ddo

	ddo.restric = "AE";	//definindo o que vai poder usar o ddo 

	ddo.scope = { 	//criando um scope
		titulo: '@'
	};

	ddo.transclude = true; //dizendo que no template a seguir, vai ter um elemento filho que eu quero manter

	ddo.templateUrl = 'js/directives/meu-painel.html';
		
	return ddo; //retornando tudo isso la pro module alurapic.
})

.directive('minhaFoto', function()
{
	var ddo = {};

	ddo.restric = "AE";

	ddo.scope = 
	{
		titulo: '@',
		url: '@'
	};

	ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

	return ddo;
})

.directive('meuBotaoPerigo',function()
{
	var ddo = {};
	ddo.restric = "E";

	ddo.scope =
	{
		nome: '@', // @ = passa uma string
		acao: '&'  // & = passa uma expressao
	};

	ddo.template = '<button ng-click = "acao(foto)" class = "btn btn-danger btn-block">{{nome}}</button>';

	return ddo;
})

.directive('meuFocus',function()
{
	var ddo = {};

	ddo.restric = "A";
	/*ddo.scope =
	{
		focado : '=' // watcher
	};*/

	ddo.link = function(scope, element)
	{
		scope.$on('fotoCadastrada', function()
		{
			element[0].focus();
		});

		/*scope.$watch('focado', function()
		{
			if(scope.focado)
			{
				element[0].focus();
				scope.focado = false;
			}
		}); */ //isso seria usado no caso do watch
	}
	return ddo;
})

.directive('meusTitulos', function() {
	var ddo = {};
	ddo.restrict = 'E';
	ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
	ddo.controller = function($scope, recursoFoto)
	{
		recursoFoto.query(function(fotos) 
		{
            $scope.titulos = fotos.map(function(foto)
            {
            	return foto.titulo;
            }); // ainda não é isso que queremos!
        });
	};
	return ddo;
});
