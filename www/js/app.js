// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var db = null;

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
'ngCordova'
])
.run(function($rootScope,$ionicPlatform,Application,$cookies,$cordovaSQLite) {
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

    if(ionic.Platform.isAndroid()){
      //android db connection
      $cordovaSQLite.openDB({ name: 'expirit.db' });
    }else{
      // web db connection
      //console.log(DBConnector+"WEB");
      db = window.openDatabase("expirit.db", "1.0", "My app", -1);

    };
    // console.log($cordovaSQLite);
    // console.log(window);
    // console.log(db);
    //$cordovaSQLite.execute(db,"DROP TABLE exercise");
    $cordovaSQLite.execute(db,"CREATE TABLE exercise (EX_NO varchar primary key NOT NULL, EX_NM varchar, REST_SECOND integer,METHOD text,EX_IMAGE_NM varchar, EX_URL varchar, EX_IMG_SYS_NM varchar,EX_EEFAULT_SET varchar,EX_ETC varchar, EX_DESC text, EX_LEVEL integer, EX_DEPTH1 varchar,EX_DEPTH2 varchar, EX_DEPTH3 varchar)");
  });
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

  RestangularProvider.setFullResponse(true);

  $httpProvider.defaults.withCredentials = true;
  RestangularProvider.setErrorInterceptor(ErrorInterceptorProvider.$get().response);

  RestangularProvider.setRequestInterceptor(function(elem, operation) {
    if (operation === "remove") {
      return undefined;
    }
    return elem;
  });
});
