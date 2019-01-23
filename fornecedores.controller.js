angular.module('app').controller('fornecedoresController', function ($scope) {
    $scope.fornecedores = [];

    $scope.add = function (fornecedor) {
        // mandar requisição post
        $scope.fornecedores.push(angular.copy(fornecedor));
    };
});