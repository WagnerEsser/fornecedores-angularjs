angular.module('App').controller('ViewCtrl', function ($routeParams, $scope, FornecedorService) {
    
    $scope.fornecedor = null;

    FornecedorService.getById($routeParams.id).then(function (response) {
        $scope.fornecedor = response.data;
    });
});