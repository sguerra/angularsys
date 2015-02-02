(function(){
    
    var app = angular.module('angularsysApp')
    
    app.directive('detail', function () {
        return {
            templateUrl: '/views/detail.html',
            restrict: 'E',
            controller : 'DetailCtrl'
        };
    });
})();