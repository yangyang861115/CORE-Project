/**
 * Created by yangyang on 2/27/16.
 */
(function () {
    angular
        .module('tutorialWebApp')
        .controller('CartCtrl', CartCtrl);
    function CartCtrl($scope, $rootScope, $location, $http) {
        console.log("Cart Controller reporting for duty.");

        $scope.message = null;
        $scope.datarows = [];
        $scope.uniqItem = [];
        $scope.genItems = [];


        $scope.getTotalFull = null;
        $scope.getTotalDown = null;
        $scope.getTotalUniq = null;
        $scope.getTotalGen = null;

        $scope.removeItem = removeItem;
        $scope.$location = $location;

        $http
            .get('http://doingthingsbetter.org/api.php?a=cart_info')
            .success(function (data) {
                $scope.message = data;
            });

        $http
            .get('http://doingthingsbetter.org/api.php?a=cart_att')
            .success(function (data) {
                $scope.datarows = data;
                $scope.getTotalFull = getTotal($scope.datarows, "balAmt");
                $scope.getTotalDown = getTotal($scope.datarows, "downAmt") - getTotal($scope.datarows, "paidAmt");
            });

        $http
            .get('http://doingthingsbetter.org/api.php?a=cart_uniq')
            .success(function (data) {
                $scope.uniqItems = data;
                $scope.getTotalUniq = getTotal($scope.uniqItems, "balAmt");
            });

        $http
            .get('http://doingthingsbetter.org/api.php?a=cart_gen')
            .success(function (data) {
                $scope.genItems = data;
                $scope.getTotalGen = getTotal($scope.genItems, "balAmt");
            });


        function getTotal(data, field) {
            var total = 0;
            for (var i = 0; i < data.length; i++) {
                total = total + data[i][field];
            }
            return parseInt(total);
        };

        function removeItem(data, index, field) {
            data.splice(index, 1);
            if (field !== 'getTotalDown' && field !== 'getTotalFull'){
                $scope[field] = getTotal(data, "balAmt");
            } else {
                $scope['getTotalFull'] = getTotal(data, "balAmt");
                $scope['getTotalDown'] = getTotal(data, "downAmt") - getTotal(data, "paidAmt");
            }

        }

    }
})();