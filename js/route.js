angular.module('App').config(function ($routeProvider) {
    $routeProvider
        // rota principal
        .when('/', { templateUrl: 'views/home.html', controller: "PageCtrl" })

        // páginas
        .when('/fornecedores', { templateUrl: 'views/fornecedor-list.html', controller: 'PageCtrl' })
        .when('/fornecedor/cad', { templateUrl: 'views/fornecedor-cad.html', controller: 'PageCtrl' })
        .when('/fornecedor/single', { templateUrl: 'views/fornecedor-single.html', controller: 'PageCtrl' })

        // 404
        .when('/404', { templateUrl: 'views/404.html', controller: 'PageCtrl' })
        .otherwise({ redirectTo: '/404' });
});