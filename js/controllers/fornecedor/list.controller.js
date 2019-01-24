angular.module('App').controller('ListCtrl', function ($scope, FornecedorService, $location, $http) {

    $scope.fornecedores = [];

    FornecedorService.listar().then(function (response) {
        $scope.fornecedores = response.data;
    });
});