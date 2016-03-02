/**
 * Created by yangyang on 3/1/16.
 */
(function(){
    angular
        .module('tutorialWebApp')
        .controller('SearchBoxController', SearchBoxController);

    function SearchBoxController($scope, EventService){
        $scope.apiSearch = apiSearch;

        function apiSearch() {
            if ($scope.searchText && $scope.searchText.length >= 3) {
                //EventService.getAllEvents
                $scope.searchTextResult = "I need an API for the data";
            }
            else {
                $scope.searchTextResult = "";
            }
        }
    }
})();