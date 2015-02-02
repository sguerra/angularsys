(function(){
    
    var app = angular.module('angularsysApp')
    
    app.directive('search', function () {
        return {
            templateUrl: '/views/search.html',
            restrict: 'E',
            controller : 'SearchCtrl'
        };
    });
})();