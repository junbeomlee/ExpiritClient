angular.module('expirit.controllers')
.controller('profileController', function($scope,CONFIG) {
  $scope.appName=CONFIG.APP_NAME;
})
