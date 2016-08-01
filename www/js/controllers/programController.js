angular.module('expirit.controllers')
.controller('programController', function($scope,CONFIG,userApi) {
  $scope.appName=CONFIG.APP_NAME;


  userApi.getList().then(function(users){
    $scope.users = users;
  });
// This will query /accounts and return a promise.
})
