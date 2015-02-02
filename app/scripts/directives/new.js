(function(){
    
    var app = angular.module('angularsysApp');
    
    app.directive('new', function () {
        return{
            templateUrl: '/views/new.html',
            restrict: 'E',
            controller : 'NewCtrl'
        };
    });

})();