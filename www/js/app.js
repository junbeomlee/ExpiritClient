// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('Expirit',
['ionic',
'expirit.controllers',
'expirit.services',
'expirit.factories',
'restangular',
'ion-tree-list',
'ion-floating-menu',
'ngCordovaOauth',
'ngCookies',
 'angular-svg-round-progressbar' ,
 'jh.angular-number-picker',
'chart.js'
])
.run(function($rootScope,$ionicPlatform,Application,DBConnector,$cookies) {
  $rootScope.$cookies = $cookies;
  if (Application.isInitialRun()) {
    Application.setInitialRun(false);
    console.log("only once!!!");
  }

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.controller('timerCtrl',function($scope, $timeout){
	$scope.myTimerFixed=30;
	$scope.myTimer=30;
	$scope.myNumber = 10;
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
.controller("ExampleController", function($scope) {
	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

})
.constant('CONFIG',{'APP_NAME': 'Expirit','APP_PROGRAM' : '내 운동 프로그램',})
.config(function($cookiesProvider,$stateProvider, $urlRouterProvider,RestangularProvider,$httpProvider,ErrorInterceptorProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'homeController'
      }
    }
  })
  .state('tab.exercise', {
    url: '/exercise',
    views: {
      'tab-exercise': {
        templateUrl: 'templates/tab-exercise.html',
        controller: 'exercieController'
      }
    }
  })
  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'profileController'
      }
    }
  })
  .state('tab.program', {
    url: '/program',
    views: {
      'tab-program': {
        templateUrl: 'templates/tab-program.html',
        controller: 'programController'
      }
    }
  })
  .state('main', {
    url: '/main',
        templateUrl: 'templates/main.html'
     
  })
  .state('main1', {
    url: '/main1',
        templateUrl: 'templates/main1.html'
     
  })
    .state('main2', {
    url: '/main2',
        templateUrl: 'templates/main2.html'
     
  })
    .state('main3', {
    url: '/main3',
        templateUrl: 'templates/main3.html'
     
  })
      .state('main4', {
    url: '/main4',
        templateUrl: 'templates/main4.html'
     
  })
  .state('tab.etc', {
    url: '/etc',
    views: {
      'tab-etc': {
        templateUrl: 'templates/tab-etc.html',
        controller: 'etcController'
      }
    }
  }).state('header',{
    url: '/asd',
    templateUrl:"templates/header.html",
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

  //restangular config==
  /*
  * dev 세팅
  */
  if(ionic.Platform.isAndroid()){
    RestangularProvider.setBaseUrl('http://10.0.2.2:8080');
  }else{
    RestangularProvider.setBaseUrl('http://localhost:8080');
  }
  //console.log($cookieStore);
  //RestangularProvider.setDefaultHeaders({ Authorization: function() { return "Token " + $cookieStore.get('token'); } });
  RestangularProvider.setFullResponse(true);


  $httpProvider.defaults.withCredentials = true;
  //RestangularProvider.setDefaultHttpFields({withCredentials: true});
  //RestangularProvider.setDefaultHeaders({'Access-Control-Allow-Credentials': true});
  //RestangularProvider.setDefaultHeaders({token: "x-restangular"});
  //$httpProvider.defaults.withCredentials = true
  //$httpProvider.interceptors.push('AuthInterceptor');
  console.log(ErrorInterceptorProvider.$get().response);
  RestangularProvider.setErrorInterceptor(ErrorInterceptorProvider.$get().response);
  
  RestangularProvider.setRequestInterceptor(function(elem, operation) {
    if (operation === "remove") {
      return undefined;
    }
    return elem;
  });
  /*$httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.delete = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
  $httpProvider.defaults.headers.get = {};
  $httpProvider.defaults.headers.options = {};*/
});
