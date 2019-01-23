angular.module('app').service('FornecedorService', function($http) {

    // método get do FornecedorService
    this.get = function() {
        return $http.get('localhost:8080/fornecedores');
    };

    // this.get = function(id_fornecedor) {
    //     return $http.get('localhost:8080/fornecedores/' + id_fornecedor);
    // }
});