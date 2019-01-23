angular.module('App').controller('FornecedorCtrl', function ($scope, $rootScope) {

    $scope.add = function(fornecedor) {
        // enviar requisição post
        alert("adição de novo fornecedor.");
        console.log(fornecedor);
    };
});