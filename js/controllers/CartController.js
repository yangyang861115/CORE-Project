/**
 * Controls the Cart
 */
angular.module('tutorialWebApp').controller('CartCtrl', function (  $scope, $location, $http ) {
    console.log("Cart Controller reporting for duty.");
	var cart = this;
	cart.message = {};
	cart.datarows = [];

	
	$http.get('https://crucore.com/api.php?a=cart_info&i=doingthingsbetter.org').success(function (data) {
        cart.message = data;
    });
    
 	//isVisibleCartInfo = true;
	$http.get('https://crucore.com/api.php?a=cart_att&i=doingthingsbetter.org').success(function (data) {
        cart.datarows = data;
        /*if (datarows[0].success == 'false') {
        	isVisibleCartInfo = false;
        }*/
    });
    	
		$scope.value = function () {
		$scope.value='full';
		$scope.$watch('value', function(value) {
		   console.log(value);
		});
	};
                
    $scope.removeRow = function (id) {
  		cart.datarows.splice(id, 1);
	};      
	$scope.getTotal = function(){
		var total = 0;
		for(var i = 0; i < cart.datarows.length; i++){
		    total = total + cart.datarows[i].balAmt;
		}
    	return parseInt(total);
    	//console.log(total);
    	//window.alert(total);
	}
	
	$scope.getTotalNumAtnd = function(){
		return cart.datarows.length;
	}

    $scope.go = function (path) {
        $('myModal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $location.path(path);
    }

});

    
/*    $scope.submit = function() {
    	$http({
                method: 'POST',
                url: 'https://crucore.com/api.php?a=cart_post',
//                headers: {
//                    'Content-Type': 'application/x-www-form-urlencoded'
//                },
//                data: $.param(cart.datarows)
                data: cart.datarows
            }).success(function (data) {
	            console.log(data);
            	$window.location.href = '/payment.html';
            });                    
    }; */
    
    
    
 /*   cart.message = {
        'downPay': 50,
        'ordNumb': 2,
        'custName' : 'Abc Def',
        'custBill': '407 s grant st',
        'createDay': '2/8/2016',
	};
		
	cart.datarows = [
        {
            'rowNum': 1,
            'prodNumb': 'CR-234-std',
            'prodDesc': 'Standard Registration',
            'owedAmt': 100,
            'paidAmt': 0,
			'balAmt' : 100
        },
        {
            'rowNum': 2,
            'prodNumb': 'CR-233-stu',
            'prodDesc': 'Student Registration',
            'owedAmt': 50,
            'paidAmt': 0,
			'balAmt' : 50
        }
    ]; */
    
/*    $scope.IsVisible = false;
    $scope.ShowHide = function () {
    	$scope.IsVisible = $scope.IsVisible ? false : true;
    };
    $scope.IsVisibleCC = false;
    $scope.ShowHideCC = function () {
    	$scope.IsVisibleCC = $scope.IsVisibleCC ? false : true;
    };
    $scope.IsVisibleEFT = false;   
    $scope.ShowHideEFT = function () {
    	$scope.IsVisibleEFT = $scope.IsVisibleEFT ? false : true;
    };
    $scope.IsVisibleSA = false;    
    $scope.ShowHideSA = function () {
    	$scope.IsVisibleSA = $scope.IsVisibleSA ? false : true;
    };
    $scope.IsVisibleCF = false;    
    $scope.ShowHideCF = function () {
    	$scope.IsVisibleCF = $scope.IsVisibleCF ? false : true;
    };
    $scope.ShowHideTA = function () {
    	$scope.IsVisibleTA = $scope.IsVisibleTA ? false : true;
    };  */
