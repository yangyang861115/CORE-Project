/**
 * Controls the Contact
 */
(function () {
    angular
        .module('tutorialWebApp')
        .controller('ContactCtrl', ContactCtrl);

    function ContactCtrl($scope, $http, $location) {
        console.log("Contact Controller 1.1 reporting for duty.");
        $scope.result = 'hidden'
        $scope.resultMessage;
        $scope.formData; //formData is an object holding the name, email, subject, and message
        $scope.submitButtonDisabled = false;
        $scope.submitted = false; //used so that form errors are shown only after the form has been submitted

        $scope.submit = function (contactform) {
            $scope.submitted = true;
            $scope.submitButtonDisabled = true;
            if (contactform.$valid) {
                $scope.formData.siteURL = $location.host();
                $scope.formData.EventCODE = $location.hash();

                $http({
                    method: 'POST',
                    url: 'http://doingthingsbetter.org/api.php?a=contact',
//                headers: {
//                    'Content-Type': 'application/x-www-form-urlencoded'
//                },
//                data: $.param($scope.formData) //param method from jQuery
                    data: $scope.formData

                }).success(function (data) {

                    console.log(data);
                    if (data.success) { //success comes from the return json object
                        $scope.submitButtonDisabled = true;
                        $scope.resultMessage = "Thanks! We have received your message.";
                        $scope.result = 'bg-success';
                    } else {
                        $scope.submitButtonDisabled = false;
                        $scope.resultMessage = "Sorry, there's an error in processing your request. Please try again.";
                        $scope.result = 'bg-danger';
                    }
                });


            }
            else {
                $scope.submitButtonDisabled = false;
                $scope.resultMessage = 'Failed.Please fill out all the fields.';
                $scope.result = 'bg-danger';
            }
        }
    }
})();
