/**
 * Controls the Cart
 */



angular.module('tutorialWebApp').controller('CartCtrl2', function ($scope, $location, $http ) {
    console.log("Cart Controller reporting for duty.");
	var cart = $scope;
	cart.message = {};
	cart.datarows = [];

	
	$http.get('http://doingthingsbetter.org/api.php?a=cart_info').success(function (data) {
        cart.message = data;
    });
    
	$http.get('http://doingthingsbetter.org/api.php?a=cart_att').success(function (data) {
        cart.datarows = data;
    });
       
	$http.get('http://doingthingsbetter.org/api.php?a=cart_uniq').success(function (data) {
        cart.uniqItems = data;
    });       

	$http.get('http://doingthingsbetter.org/api.php?a=cart_gen').success(function (data) {
        cart.genItems = data;
    });
                
    $scope.removeRowAttn = function (id) {
  		cart.datarows.splice(id, 1);
	};
	
    $scope.removeRowUniq = function (id) {
  		cart.uniqItems.splice(id, 1);
	};
	
    $scope.removeRowGen = function (id) {
  		cart.genItems.splice(id, 1);
	};
	  
	$scope.getTotalFull = function(){
		var total = 0;
		for(var i = 0; i < cart.datarows.length; i++){
		    total = total + cart.datarows[i].balAmt;
		}
    	return parseInt(total);
	};

	$scope.getTotalDown = function(){
		var total = 0;
		for(var i = 0; i < cart.datarows.length; i++){
		    total = total + cart.datarows[i].downAmt - cart.datarows[i].paidAmt;
		}
    	return parseInt(total);
	}

	$scope.getTotalUniq = function(){
		var totalUniq = 0;
		for(var i = 0; i < cart.uniqItems.length; i++){
		    totalUniq = totalUniq + cart.uniqItems[i].balAmt;
		}
    	return parseInt(totalUniq);
	};
	
	$scope.getTotalGen = function(){
		var totalGen = 0;
		for(var i = 0; i < cart.genItems.length; i++){
		    totalGen = totalGen + cart.genItems[i].balAmt;
		}
    	return parseInt(totalGen);
	};
	
/*	$scope.getTotal = function(){
		var total = 0;
		total = $scope.getTotalUniq() + $scope.getTotalGen();
		//var fullordown = document.querySelectorAll('input[type="radio"][name="furodo"]:checked');
		if ($scope.balamt == "full" || $scope.balamt == "true")//if (fullordown[0].value == 'full')
		{
			total = total + $scope.getTotalFull();
		}
		else
		{
			total = total + $scope.getTotalDown();
		}
		return parseInt(total);
	}; */
	
	$scope.getTotal = function(){
		var total = 0;
		total = $scope.getTotalUniq() + $scope.getTotalGen();
		//var fullordown = document.querySelectorAll('input[type="radio"][name="furodo"]:checked');
		if ($scope.balamt == "down")//if (fullordown[0].value == 'full')
		{
			total = total + $scope.getTotalDown();
		}
		else
		{
			total = total + $scope.getTotalFull();
		}
		return parseInt(total);
	};

	$scope.getTotalNumAtnd = function(){
		return cart.datarows.length;
	}

    $scope.go = function (path) {

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
