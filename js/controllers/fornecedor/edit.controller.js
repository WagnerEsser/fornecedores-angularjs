angular.module('App').controller('EditCtrl', function ($routeParams, $scope, FornecedorService, $location) {

    $scope.fornecedor = null;

    FornecedorService.getById($routeParams.id).then(function (response) {
        $scope.fornecedor = response.data;
    });

    $scope.update = function (fornecedor) {
        FornecedorService.update(fornecedor, fornecedor.id);
        $location.path( "/fornecedores" );
    };
});