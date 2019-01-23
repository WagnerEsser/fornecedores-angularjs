angular.module('app').config( function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'fornecedor-list.html',
            controller: 'fornecedoresController'
        })
});