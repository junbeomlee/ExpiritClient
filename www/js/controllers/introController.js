angular.module('expirit.controllers')

.controller('introController', function($scope) {
		console.log("wait 3s.");
		setTimeout(function() {
			window.location.href="http://localhost:8100/#/intro2";
		}, 3000);
})

.controller('intro2Controller', function($scope) {
$scope.options = {
  loop: false,
  effect: 'fade',
  speed: 500,
}

$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
  // data.slider is the instance of Swiper
  $scope.slider = data.slider;
});

$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
  console.log('Slide change is beginning');
});

$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  // note: the indexes are 0-based
  $scope.activeIndex = data.activeIndex;
  $scope.previousIndex = data.previousIndex;
});
})

/*질의사항에서 데이트픽커를 관리하는 컨트롤러*/
.controller('datepickerController', function ($scope, ionicDatePicker,$rootScope) {
	$scope.currentDate = new Date();
	$scope.minDate = new Date(2105, 6, 1);
	$scope.maxDate = new Date(2015, 6, 31);
    var ipObj1 = {
		callback: function (val) {  //Mandatory
			console.log('Return value from the datepicker popup is : ' + val, new Date(val));
			$scope.currentDate=new Date(val);
		},
		disabledDates: [            //Optional
		new Date(2016, 2, 16),
		new Date(2015, 3, 16),
		new Date(2015, 4, 16),
		new Date(2015, 5, 16),
		new Date('Wednesday, August 12, 2015'),
		new Date("08-16-2016"),
		new Date(1439676000000)
		],
		from: new Date(1920, 1, 1), //Optional
		to: new Date(2016, 10, 30), //Optional
		inputDate: new Date(),      //Optional
		mondayFirst: true,          //Optional
		//disableWeekdays: ,       //Optional
		closeOnSelect: false,       //Optional
		templateType: 'modal'       //Optional
    };

    $scope.openDatePicker = function(){
		ionicDatePicker.openDatePicker(ipObj1);
    };
	$scope.next = function(){
		$rootScope.birth=$scope.currentDate;
		console.log($rootScope.birth);
		location.href="#/quest3";
	}
})

/*질의사항에서 숫자 픽커를 관리하는 컨트롤러*/

.controller('numberpickerController', function ($scope,$rootScope) {
	$scope.number=75;
	$scope.up = function(){
      $scope.number++;
    };
	$scope.down = function(){
      $scope.number--;
    };
	$scope.next = function(){
		$rootScope.weight=$scope.number;
		console.log($rootScope.weight);
		location.href="#/quest5";
	}
})

.controller('loginController', function ($scope,UserApi) {
	$scope.email='';
	$scope.passwd='';
	$scope.login = function(){
		$scope.email= document.getElementById('email').value;
		$scope.passwd= document.getElementById('passwd').value;
		UserApi.login($scope.email,$scope.passwd).then(function(res){
			console.log(res.data[0].email);
			location.href="#/quest1";
		})
	}
})
.controller('joinController', function ($scope,UserApi) {
	$scope.name='';
	$scope.email='';
	$scope.passwd='';
	$scope.passwd2='';
	$scope.join = function(){
		$scope.name= document.getElementById('name').value
		$scope.email= document.getElementById('email').value
		$scope.passwd= document.getElementById('passwd').value;
		$scope.passwd2= document.getElementById('passwd2').value;
		if($scope.passwd==$scope.passwd2){
			UserApi.join($scope.name,$scope.email,$scope.passwd).then(function(res){
				console.log(res.data[0].email);
			})
			location.href="#/quest1";
		}else{
			console.log("password is not equal");
		}    
	}
})


/*퀘스트 컨트롤러*/
.controller('questController', function ($scope,$rootScope,UserApi) {
	
	$scope.lose_checked = function(){
		if(document.getElementById("lose").checked==true){
			$rootScope.purpose="lose";
			document.getElementById("lose").checked=true;
		}else{
			document.getElementById("lose").checked=false;
		};
		document.getElementById("keep").checked = false;
		document.getElementById("gain").checked = false;
	}

	$scope.keep_checked = function(){
		if(document.getElementById("keep").checked==true){
			$rootScope.purpose="keep";
			document.getElementById("keep").checked=true;
		}else{
			document.getElementById("keep").checked=false;
		};
		document.getElementById("lose").checked = false;
		document.getElementById("gain").checked = false;
	}

	$scope.gain_checked = function(){
		if(document.getElementById("gain").checked==true){
			$rootScope.purpose="gain";
			document.getElementById("gain").checked=true;
		}else{
			document.getElementById("gain").checked=false;
		};
		document.getElementById("lose").checked = false;
		document.getElementById("keep").checked = false;
	}


/*남자 여자 체크 단일선택 컨트롤러*/
	$scope.male_checked = function(){
		if(document.getElementById("male").checked==true){
			$rootScope.sex="male";
			document.getElementById("male").checked=true;
		}else{
			document.getElementById("male").checked=false;
		};
		document.getElementById("female").checked = false;
	}

	$scope.female_checked = function(){
		if(document.getElementById("female").checked==true){
			$rootScope.sex="female";
			document.getElementById("female").checked=true;
		}else{
			document.getElementById("female").checked=false;
		};
		document.getElementById("male").checked = false;
	}

	/*머신운동 및 프리웨이트 단일 체크 컨트롤러*/
	$scope.freeweight_checked = function(){
		if(document.getElementById("freeweight").checked==true){
			$rootScope.prefer="freeweight";
			document.getElementById("freeweight").checked=true;
		}else{
			document.getElementById("freeweight").checked=false;
		};
		document.getElementById("machine").checked = false;
	}

	$scope.machine_checked = function(){
		if(document.getElementById("machine").checked==true){
			$rootScope.prefer="machine";
			document.getElementById("machine").checked=true;
		}else{
			document.getElementById("machine").checked=false;
		};
		document.getElementById("freeweight").checked = false;
	}
	$scope.next = function(){
		console.log($rootScope.sex);
		location.href="#/quest8";
	}
})



