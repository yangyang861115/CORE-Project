(function () {
    angular
        .module('tutorialWebApp')
        .factory('UserService', UserService);

    function UserService () {
        var api = {
            newEventType: ''
        };
        return api;
    }

})();

