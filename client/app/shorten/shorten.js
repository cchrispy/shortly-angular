//var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $window) {
  // Your code here
  // $scope.link;
  $scope.rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  $scope.baseUrl;
  $scope.title;

  var jwt = $window.localStorage.getItem('com.shortly');

  if (!jwt) {
    $location.path('/signin');
  }

  $scope.addLink = function() {
    Links.addOne($scope.link)
      .then(function(data) {
        $scope.baseUrl = data.data.baseUrl + '/' + data.data.code;
        $scope.title = data.data.title;
        console.log(data);
      });
    $scope.link = '';
  };

  // $scope.shortenLink = function() {
  //   $scope.addLink($scope.link);
    
  // };

  // $scope.redirect = function(path) {
  //   $location.path(path);
  // };



});
