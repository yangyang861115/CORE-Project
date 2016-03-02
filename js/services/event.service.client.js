/**
 * Created by yangyang on 3/1/16.
 */
(function () {
    angular
        .module('tutorialWebApp')
        .factory('EventService', EventService);

    function EventService () {
        var api = {
            getAllEvents: getAllEvents
        };
        return api;

        function getAllEvents(){

        }
    }

})();
