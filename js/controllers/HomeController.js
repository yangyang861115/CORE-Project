/**
 * Controls the Home
 */
(function () {
    angular
        .module('tutorialWebApp')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl($scope, $location, $http, UserService) {
        console.log("Home Controller reporting for duty.");


        $scope.strt = {};

        $scope.info = null;
        $scope.list = [];



        $http.get('http://doingthingsbetter.org/api.php?a=strt_type').success(function (data) {
            $scope.strt = data;
        });

        $scope.choose = function (item) {
            $scope.click = item.g_class;
            $scope.chosen = item;
        };

        $scope.register = function (key) {
            UserService.newEventType = key;
            console.log(key, " is selected!");
            $location.path('/registration');
        }

        $http
            .get('http://doingthingsbetter.org/api.php?a=strt_list')
            .success(function (data) {
                $scope.list = data;
        });

        $http
            .get('http://doingthingsbetter.org/api.php?a=strt_info')
            .success(function(data){
                $scope.info = data;
            });

    }

})();
