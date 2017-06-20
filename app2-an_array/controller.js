angular.module("myApp").controller("myCtrl", function($scope, myService){
  $scope.myData = myService.myData;
})
