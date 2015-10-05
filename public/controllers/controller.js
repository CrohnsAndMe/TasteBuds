var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) 
{
    console.log("Hello World from controller");


$http.get('/cafeList').success(function (res){
console.log("I got the data i requested");

    $scope.cafeList = res;

});
    
}]);
