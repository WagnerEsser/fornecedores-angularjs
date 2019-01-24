angular.module('App').controller('CreateCtrl', function ($scope, $rootScope) {

    $scope.add = function(fornecedor) {
        // enviar requisição post
        alert("adição de novo fornecedor.");
        console.log(fornecedor);
    };
});