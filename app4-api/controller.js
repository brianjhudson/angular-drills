angular.module("myApp").controller("myCtrl", function($scope, myService) {
  $scope.index = 1
  $scope.getData = function (index) {
    myService.getData(index).then(function(result){
      $scope.person = result.data;
    })
  };
  $scope.getData($scope.index);
  $scope.getPrevious = function() {
    if ($scope.index > 1) {
      $scope.index--;
      $scope.getData($scope.index);
    }
  }
  $scope.getNext = function() {
    $scope.index++;
    $scope.getData($scope.index);
  }

});
