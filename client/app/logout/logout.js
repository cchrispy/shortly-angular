angular.module('shortly.logout', [])

.controller('LogoutController', function($scope, $window) {
  // no logout functionality at the moment
  $window.localStorage.clear();
});