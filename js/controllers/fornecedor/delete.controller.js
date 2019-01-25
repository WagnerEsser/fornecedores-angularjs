angular.module('App').controller('DeleteCtrl', function ($routeParams, FornecedorService) {
    
    FornecedorService.delete($routeParams.id).then(function (response) {
        $location.path("/fornecedores");
    });
});