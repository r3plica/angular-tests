(function () {
    'use strict';
  
    angular.module('testsApp.core', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
  
        'testsApp.home',
        'testsApp.about',
        'testsApp.contact'
      ]);  
  })();