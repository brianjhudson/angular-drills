angular.module('myApp').controller('myCtrl', function($scope, myService) {
  $scope.myData = myService.getMyData();
  console.log($scope.myData);
})
