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
.constant('CONFIG',
{
  'APP_NAME': 'Expirit',
  'APP_PROGRAM' : '내 운동 프로그램',
})
.config(function($cookiesProvider,$stateProvider, $urlRouterProvider,RestangularProvider,$httpProvider) {

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

  RestangularProvider.setErrorInterceptor(
    function ( response ) {
      if ( response.status == 401 ) {
        dialogs.error("Unauthorized - Error 401", "You must be authenticated in order to access this content.")
        .result.then( function () {
          console.log("need login");
        });
      }
      else {
        // Some other unknown Error.
        console.log( response );
        dialogs.error(response.statusText + " - Error " + response.status,
        "An unknown error has occurred.<br>Details: " + response.data);
      }
      // Stop the promise chain.
      return false;
    }
  );
});
