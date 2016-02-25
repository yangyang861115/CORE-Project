/**
 * Controls all other Pages
 */
(function () {
    angular
        .module('tutorialWebApp')
        .controller('PageCtrl', PageCtrl);

    function PageCtrl(/* $scope, $location, $http */) {
        console.log("Page Controller reporting for duty.");
    }

})();
