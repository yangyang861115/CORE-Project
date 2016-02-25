/**
 * Controls the Payment
 */
(function () {
    angular
        .module('tutorialWebApp')
        .controller('PayCtrl', PayCtrl);

    function PayCtrl(/* $scope, $location, $http */) {
        console.log("Payment Controller reporting for duty.");
    }

})();