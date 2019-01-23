angular.module('App').controller('fornecedorCtrl', function ($scope, $rootScope) {

    $scope.add = function(fornecedor) {
        // enviar requisição post
        alert("adição de novo fornecedor.");
        alert(fornecedor);
    };
});