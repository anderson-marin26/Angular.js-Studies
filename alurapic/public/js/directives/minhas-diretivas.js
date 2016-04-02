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
});
