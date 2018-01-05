(function () {
    'use strict';

    function controller($stateParams) {
        /*jshint validthis: true */
        var self = this;
        
        // Bindings
        self.name = $stateParams.name;
    }

    angular.module('testsApp.about').controller('AboutController', controller);
})();