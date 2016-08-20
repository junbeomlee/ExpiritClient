angular.module('expirit.controllers')
.service('MainService',function(){
	var exercise="데드리프트";
	var setNo=1;
	console.log(setNo);
   return {
		getEX: function() {
			return exercise;
		},
		Increment_setNo: function(){
			setNo++;
		},
		Get_setNo: function(){
			return setNo;
		},
		Init_setNo: function(){
			setNo=1;
		}
	};
})
.controller('mainController', function($scope,MainService) {
	$scope.exName=MainService.getEX();
})
.controller('main1Controller', function($scope,MainService) {
	$scope.exName=MainService.getEX();
	$scope.myweight=65;
	$scope.weight = 80;
})
.controller("main2Controller",function($scope,MainService){
	console.log("main2")
	$scope.myNumber = 10;					
	$scope.weight=85;
	$scope.exName=MainService.getEX();


		$scope.elemId="set";
		$scope.elemId=$scope.elemId.concat(MainService.Get_setNo());
		console.log($scope.elemId);
		$scope.x =document.getElementById($scope.elemId);
		$scope.x.setAttribute("color","red");
})
.controller("main3Controller",function($scope,$timeout,MainService){
	console.log("main3");
	$scope.exName=MainService.getEX();
	$scope.elemId="set";
	$scope.setNo=MainService.Get_setNo();
	$scope.elemId=$scope.elemId.concat($scope.setNo);
	console.log($scope.elemId);
	$scope.y =document.getElementById($scope.elemId);
	$scope.y.setAttribute("color","red");
	$scope.nextSetEvent= function() {
		console.log("nextSet");
		if(MainService.Get_setNo()<5){
			MainService.Increment_setNo();
			window.location.href="http://localhost:8100/#/main2";
		}
		else{
			MainService.Init_setNo();
		  window.location.href="http://localhost:8100/#/main4";
		} 
	}
	$scope.myTimerFixed=30;
	$scope.myTimer=30;

	$scope.radius = 300;

	var myTimerVariable;
	$scope.numberPickerObject = {
		inputValue: 0, //Optional
		minValue: -9007199254740991,
		maxValue: 9007199254740991,
		precision: 3,  //Optional
		decimalStep: 0.25,  //Optional
		format: "DECIMAL",  //Optional - "WHOLE" or "DECIMAL"
		unit: "",  //Optional - "m", "kg", "℃" or whatever you want
		titleLabel: 'Number Picker',  //Optional
		setLabel: 'Set',  //Optional
		closeLabel: 'Close',  //Optional
		setButtonType: 'button-positive',  //Optional
		closeButtonType: 'button-stable',  //Optional
		callback: function (val) {    //Mandatory
			timePickerCallback(val);
		}
	};

	$scope.myCustomTimer=function(){
		$scope.myTimer--;
		if($scope.myTimer == 0){
			$timeout.cancel(myTimerVariable);
			$scope.complete(false);
			return false;
		}
		myTimerVariable = $timeout($scope.myCustomTimer, 1000);
	}
	$scope.start=function(){
		myTimerVariable = $timeout($scope.myCustomTimer, 1000);
	}
	$scope.stop=function(){
		$timeout.cancel(myTimerVariable);
		complete(true);
	}
    $scope.getStyle = function(){
                var transform =  'translateY(-50%) translateX(-50%)';

                return {
                    'top':  '50%',
                    'bottom': 'auto',
                    'left': '50%',
                    'transform': transform,
                    '-moz-transform': transform,
                    '-webkit-transform': transform,
                    'font-size': $scope.radius/3.5 + 'px'
                };
            };
	var complete = function (forceFulAbort){
		if(forceFulAbort){
			alert('You killed the damn timer');
		}else{
			alert('Timer completed');
		}
	}
})
.controller("main4Controller", function($scope) {
	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

})