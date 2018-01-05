(function () {
    'use strict';

    function configureApp($locationProvider, $urlServiceProvider) {
        $locationProvider.html5Mode({ enabled: true });

        $urlServiceProvider.config.type('productName', {
            encode: function (str) { return str && str.replace(/ /g, '-'); },
            decode: function (str) { return str && str.replace(/-/g, ' '); },
            is: angular.isString,
            pattern: /[^/]+/
        });
    }

    angular.module('testsApp').config(configureApp);
})();