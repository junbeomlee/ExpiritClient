angular.module('expirit.controllers')
.controller('homeController', function($scope,CONFIG,$http,FacebookLogin) {
  $scope.appName=CONFIG.APP_NAME;
  $scope.facebookLogin=function(){
    console.log("clicked");
    FacebookLogin.login();
  }
})
