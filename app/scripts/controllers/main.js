(function(){
    var app = angular.module('angularsysApp');
    
    var proceedings = [
        {id : 1, name : "Proceeding 1", desc : "Procedimiento numero uno", tag : "3.0.1"},
        {id : 2, name : "Proceeding 2", desc : "Procedimiento numero dos", tag : "3.0.2"}
    ];
    
    app.controller('MainCtrl', function ($scope, $routeParams)
    {
        $scope.query = "";
        $scope.proceeding = null;

        $scope.name = "";
        $scope.tag = "";
        
        $scope.proceedings = proceedings; 
        $scope.showProceeding = $routeParams.proceedingId ? true:false;
    });
    
    app.controller('DetailCtrl', function ($scope, $routeParams)
    {
        if($scope.showProceeding)
            $scope.proceeding = $scope.proceedings[$routeParams.proceedingId-1];
    });
    app.controller('NewCtrl',function($scope)
    {
        $scope.new = function()
        {
            $scope.proceedings.push({name : $scope.name, tag : $scope.tag, id : $scope.proceedings.length + 1 });

            $scope.name = "";
            $scope.tag = "";
        }
    });
    app.controller('SearchCtrl',function ($scope, $routeParams)
    {
        if($scope.showProceeding)
            $scope.proceeding = $scope.proceedings[$routeParams.proceedingId-1];
    });
    
})();
