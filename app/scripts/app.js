'use strict';
(function(){
    var app =  angular.module('angularsysApp', ['ngRoute']);
    
    app.config(function ($routeProvider)
    {
        $routeProvider
        .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl'})
        .when('/proceeding/:proceedingId', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
        .otherwise({ redirectTo: '/' });
    });
})();