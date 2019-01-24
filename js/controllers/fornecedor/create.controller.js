angular.module('App').controller('CreateCtrl', function ($scope, FornecedorService, $location) {

    $scope.add = function (fornecedor) {
        FornecedorService.add(fornecedor).then(function (response) {
            $location.path("/fornecedores");
        });
    };
});