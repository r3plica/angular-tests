(function () {
    'use strict'; 

    function routes($stateProvider) {        
        $stateProvider.state('about', {
            url: '/about/{name}',
            templateUrl: 'scripts/about/about.html',
            controller: 'AboutController',
            controllerAs: 'controller',
            data: {
                pageTitle: 'About'
            }
        });
    }

    angular.module('testsApp.about').config(routes);   
})();