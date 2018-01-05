(function () {
    'use strict'; 

    function routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'scripts/home/home.html',
            controller: 'HomeController',
            controllerAs: 'controller',
            data: {
                pageTitle: 'Home'
            }
        });

        $urlRouterProvider.otherwise('/');
    }

    angular.module('testsApp.home').config(routes);   
})();