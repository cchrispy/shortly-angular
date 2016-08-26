angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  var jwt = $window.localStorage.getItem('com.shortly');

  if (!jwt) {
    $location.path('/signin');
  }

  $scope.addLink = function(data) {
    Links.addOne(data);
  };

  // $scope.redirect = function(path) {
  //   $location.path(path);
  // };

});
