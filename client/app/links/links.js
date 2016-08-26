angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location, $window) {
  // Your code here
  $scope.data = { links: [] };

  
  var jwt = $window.localStorage.getItem('com.shortly');

  if (!jwt) {
    $location.path('/signin');
  }

  Links.getAll().then(function(results) {
    console.log(results);
    $scope.data.links = results;
  });

  // $scope.redirect = function(path) {
  //   $location.path(path);
  // };

});
