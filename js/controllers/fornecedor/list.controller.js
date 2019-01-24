angular.module('App').controller('ListCtrl', function ($scope, FornecedorService, $location, $http) {
    
    $scope.fornecedores = [];  // irá receber a lista buscada no FornecedorService
    
    FornecedorService.listar().then(function(data) {
       console.log("fornecedores listados...")
    });
});