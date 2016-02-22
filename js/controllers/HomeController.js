/**
 * Controls the Home
 */
angular.module('tutorialWebApp').controller('HomeCtrl', function ($scope, $location, $http, myService) {
    console.log("Home Controller reporting for duty.");
    $scope.strt = {};
    $http.get('https://crucore.com/api.php?a=strt_type').success(function (data) {
        $scope.strt = data;
    });
    
    $scope.choose = function(item) {
        $scope.click = item.g_class;
        $scope.chosen = item;
    };
    
    $scope.register = function(key) {
        myService.type = key;
        console.log(key, " is selected!");
        $location.path('/registration');
    }

});