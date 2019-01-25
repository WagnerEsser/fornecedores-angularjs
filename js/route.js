angular.module('App').config(function ($routeProvider) {
    $routeProvider
        // rota principal
        .when('/', { templateUrl: 'views/home.html', controller: "PageCtrl" })

        // fornecedores
        .when('/fornecedores', { templateUrl: 'views/fornecedor-list.html', controller: 'ListCtrl' })
        .when('/fornecedor/cad', { templateUrl: 'views/fornecedor-cad.html', controller: 'CreateCtrl' })
        .when('/fornecedor/edit/:id', { templateUrl: 'views/fornecedor-edit.html', controller: 'EditCtrl' })
        .when('/fornecedor/view/:id', { templateUrl: 'views/fornecedor-view.html', controller: 'ViewCtrl' })

        // demais
        .when('/contato', { templateUrl: 'views/contato.html', controller: 'PageCtrl' })

        // 404
        .when('/404', { templateUrl: 'views/404.html', controller: 'PageCtrl' })
        .otherwise({ redirectTo: '/404' });
});