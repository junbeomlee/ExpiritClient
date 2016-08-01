angular.module('expirit.controllers')
.controller('etcController', function($scope,CONFIG,$http) {
  $scope.appName=CONFIG.APP_NAME;
})
