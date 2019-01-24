angular.module('App').controller('ListCtrl', function ($scope, FornecedorService) {

    $scope.fornecedores = [];

    FornecedorService.listar().then(function (response) {
        $scope.fornecedores = response.data;
    });
});