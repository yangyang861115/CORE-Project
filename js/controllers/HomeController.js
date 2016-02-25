/**
 * Controls the Home
 */
(function () {
    angular
        .module('tutorialWebApp')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl($scope, $location, $http, myService) {
        console.log("Home Controller reporting for duty.");


        $scope.strt = {};

        $scope.list = [];

        $http.get('https://crucore.com/api.php?a=strt_type').success(function (data) {
            $scope.strt = data;
        });

        $scope.choose = function (item) {
            $scope.click = item.g_class;
            $scope.chosen = item;
        };

        $scope.register = function (key) {
            myService.type = key;
            console.log(key, " is selected!");
            $location.path('/registration');
        }

        $http.get('https://crucore.com/api.php?a=strt_list').success(function (data) {
            $scope.list = data;
        });

    }

})();
