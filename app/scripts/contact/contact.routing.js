(function () {
    'use strict'; 

    function routes($stateProvider) {        
        $stateProvider.state('contact', {
            url: '/contact/{name:productName}',
            templateUrl: 'scripts/contact/contact.html',
            controller: 'ContactController',
            controllerAs: 'controller',
            data: {
                pageTitle: 'Contact'
            }
        });
    }

    angular.module('testsApp.contact').config(routes);   
})();