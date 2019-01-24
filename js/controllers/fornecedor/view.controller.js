angular.module('App').controller('ViewCtrl', function ($routeParams, $scope, FornecedorService, $location, $http) {
    
    $scope.fornecedor = null;

    FornecedorService.getById($routeParams.id).then(function (response) {
        $scope.fornecedor = response.data;
    });
});