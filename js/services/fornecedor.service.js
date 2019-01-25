angular.module('App').factory('FornecedorService', function ($http, URL_API) {
    
    return {
        listar: function () {
            return $http.get(URL_API);
        },
        add: function (fornecedor) {
            return $http.post(URL_API, fornecedor);
        },
        getById: function (id) {
            return $http.get(URL_API + id);
        },
        update: function (fornecedor, id) {
            return $http.put(URL_API + id, fornecedor);
        },
        delete: function (id) {
            console.log("deletadooooooooo");
            return $http.delete(URL_API + id);
        },
        searchByName: function (busca) {
            return $http.get(URL_API + 'search/' + busca);
        }
    }
});