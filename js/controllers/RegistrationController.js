/**
 * Controls the Registration
 */
(function () {
    angular
        .module('tutorialWebApp')
        .controller('RegiCtrl', RegiCtrl);

    function RegiCtrl($scope, $location, $http, $sce, UserService) {
        console.log("Registration Controller reporting for duty.");
        var form = $scope;

        $scope.dataLoaded = false;
        form.regType = UserService.newEventType;

        form.result = 'hidden';
        form.resultMessage;
        form.message = {}; //header message
        form.formEles = []; // rows in the form
        form.formData = {}; // submit form data
        form.submitted = false;

        form.EMAIL_REGEXP = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        //form.EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/

        form.renderHtml = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        form.go = function (path) {
            $('myModal').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            $location.path('/registration');
        }

        //form header message data from API
        //********************************
        //1 siteKey = unique site ID.
        //2 siteTitle = Descriptive Title of Site
        //3 aID = atendee ID number
        //4 headTot = Total number of Header Fields
        //5 headGroups = a key/value pair JSON string with the header info

        $http.get('https://crucore.com/api.php?a=att_info').success(function (data) {
            form.message = data;
        });

        //form elements data from API
        //********************************
        //Each row will contain these fields
        //1 rowNum = a unique row number ID
        //2 group  = the heading group to which this row belongs
        //3 label = The standard label field
        //4 type = the type of input field
        //5 extra = extra parameters based on field type
        //6 reqd = if field is required
        //7 value = current value of this field

        $http.get('https://crucore.com/api.php?a=att_reg').success(function (data) {
            form.formEles = data;
            $scope.dataLoaded = true;
        });

        //create an array for select box
        form.creatArray = function (name, valist) {
            form.formData[name] = [];
            for (var itm in valist) {
                form.formData[name].push(valist[itm]);
            }
        }


        form.submit = function (regiForm) {
            if (regiForm.$valid) {

                form.submitted = true;
                form.formData.siteURL = $location.host();
                form.formData.EventCODE = $location.url();

                console.log(form.formData);
                $http({
                    method: 'POST',
                    url: 'https://crucore.com/api.php?a=att_save',
                    //                headers: {
                    //                    'Content-Type': 'application/x-www-form-urlencoded'
                    //                },
                    //                data: $.param(form.formData)
                    data: form.formData
                }).success(function (data) {
                    if (data.success) { //success comes from the return json object
                        form.submitButtonDisabled = true;
                        form.resultMessage = data.msg;
                        form.result = 'bg-success';
                    } else {
                        form.submitButtonDisabled = false;
                        form.resultMessage = data.msg;
                        form.result = 'bg-danger';
                    }

                });

            } else {
                form.checkVal = true;
                form.submitButtonDisabled = false;
                form.resultMessage = "Please correct the mistakes in the form!";
                form.result = 'bg-danger';
            }
        }

        form.reset = function () {
            form.formData = {};
        }
    }
})();