angular.module('expirit.factories').factory('GoogleLogin',GoogleLogin)

GoogleLogin.$inject=['$cordovaOauth'];

function GoogleLogin($cordovaOauth){
  console.log($cordovaOauth);
  return {};
}
