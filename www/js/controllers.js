angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$document,CONFIG) {

  $scope.appName=CONFIG.APP_NAME;
})

.controller('ExerciseCtrl', function($scope, Chats,CONFIG) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.appName=CONFIG.APP_NAME;

})
.controller('ProfileCtrl', function($scope,CONFIG) {
  $scope.appName=CONFIG.APP_NAME;

  $scope.settings = {
    enableFriends: true
  };
})
.controller('EtcCtrl', function($scope,CONFIG) {
  $scope.appName=CONFIG.APP_NAME;

  $scope.settings = {
    enableFriends: true
  };
})
.controller('AccountCtrl', function($scope,CONFIG) {
  $scope.appName=CONFIG.APP_NAME;

  $scope.settings = {
    enableFriends: true
  };
});
