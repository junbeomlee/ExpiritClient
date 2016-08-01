angular.module('expirit.controllers')
.controller('homeController', function($scope,CONFIG,$http) {
  $scope.appName=CONFIG.APP_NAME;
})
