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
'ngCordova',
'ngRoute',
'angular-svg-round-progressbar' ,
'jh.angular-number-picker',
'chart.js',
'ionic-datepicker' //데이트피커 주입시켜 줌.
])
.run(function($rootScope,$ionicPlatform,Application,$cookies,$cordovaSQLite,DBConnector) {
  $rootScope.$cookies = $cookies;

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

    /*if(ionic.Platform.isAndroid()){
      //android db connection
      $cordovaSQLite.openDB({ name: 'expirit.db' });
    }else{
      // web db connection
      //console.log(DBConnector+"WEB");
      db = window.openDatabase("expirit.db", "1.0", "My app", -1);
    };*/
    DBConnector.connectDatabase(ionic.Platform.isAndroid());
    DBConnector.createExerciseTable();
    if (Application.isInitialRun()) {
      Application.setInitialRun(false);
      console.log("only once!!!");
    }
    //$cordovaSQLite.execute(db,"CREATE TABLE IF NOT EXISTS exercise (EX_NO varchar primary key NOT NULL, EX_NM varchar, REST_SECOND integer,METHOD text,EX_IMAGE_NM varchar, EX_URL varchar, EX_IMG_SYS_NM varchar,EX_DEFAULT_SET varchar,EX_IMG_PATH varchar,EX_ETC varchar, EX_DESC text, EX_LEVEL integer, EX_DEPTH1 varchar,EX_DEPTH2 varchar, EX_DEPTH3 varchar)");
    // console.log($cordovaSQLite);
    // console.log(window);
    // console.log(db);
    //$cordovaSQLite.execute(db,"DROP TABLE exercise");

  });
})


.constant('CONFIG',{'APP_NAME': 'Expirit','APP_PROGRAM' : '내 운동 프로그램',})
.config(function($cookiesProvider,$stateProvider, $urlRouterProvider,RestangularProvider,$httpProvider,ErrorInterceptorProvider,$ionicConfigProvider) {

$ionicConfigProvider.tabs.position('bottom');

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
        templateUrl: 'templates/main/main.html'

  })
  .state('main1', {
    url: '/main1',
        templateUrl: 'templates/main/main1.html'

  })
    .state('main2', {
    url: '/main2',
        templateUrl: 'templates/main/main2.html'

  })
    .state('main3', {
    url: '/main3',
        templateUrl: 'templates/main/main3.html'

  })
      .state('main4', {
    url: '/main4',
        templateUrl: 'templates/main/main4.html'

  })
    .state('intro1-2', {
    url: '/intro1-2',
        templateUrl: 'templates/intro/intro1-2.html'

  })
  
  .state('intro2', {
    url: '/intro2',
        templateUrl: 'templates/intro/intro2.html'

  })

    .state('intro3-1', {
    url: '/intro3-1',
        templateUrl: 'templates/intro/intro3-1.html'

  })
      .state('quest1', {
    url: '/quest1',
        templateUrl: 'templates/quest/quest1.html'

  })
        .state('quest2', {
    url: '/quest2',
        templateUrl: 'templates/quest/quest2.html'

  })
        .state('quest3', {
    url: '/quest3',
        templateUrl: 'templates/quest/quest3.html'

  })
          .state('quest4', {
    url: '/quest4',
        templateUrl: 'templates/quest/quest4.html'

  })          
  .state('quest5', {
    url: '/quest5',
        templateUrl: 'templates/quest/quest5.html'

  })
    .state('quest6', {
    url: '/quest6',
        templateUrl: 'templates/quest/quest6.html'

  })
      .state('quest7', {
    url: '/quest7',
        templateUrl: 'templates/quest/quest7.html'

  })   
  .state('quest8', {
    url: '/quest8',
        templateUrl: 'templates/quest/quest8.html'

  })
    .state('interview1', {
    url: '/interview1',
        templateUrl: 'templates/interview/interview1.html'

  })
      .state('interview2', {
    url: '/interview2',
        templateUrl: 'templates/interview/interview2.html'

  })
        .state('interview2-1', {
    url: '/interview2-1',
        templateUrl: 'templates/interview/interview2-1.html'

  })
        .state('interview3', {
    url: '/interview3',
        templateUrl: 'templates/interview/interview3.html'

  })
          .state('interview4', {
    url: '/interview4',
        templateUrl: 'templates/interview/interview4.html'

  })
  .state('join', {
    url: '/join',
        templateUrl: 'templates/intro/join.html'

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
  }).state('addExercise',{
    url: '/addExercise/:day',
    templateUrl : "templates/addExercise.html",
    controller : 'addExerciseController'
    /*views:{
      'addExercise' : {
        templateUrl:"templates/addExercise.html",
        controller: 'addExerciseController'
      }
    }*/
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
    }/*else if(operation==="post"){
      return undefined;
    }*/
    console.log(elem);
    return elem;
  });
});

