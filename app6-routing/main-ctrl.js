angular.module("mainApp").controller("mainCtrl", function($scope, mainService, $state){
  var url = "http://swapi.co/api/people/";
  var prevUrl = "";
  var nextUrl = "";
  getData(url);
  function getData (url) {
    mainService.getData(url).then(function(results){
      $scope.characters = results.data.results;
      prevUrl = results.data.previous;
      nextUrl = results.data.next;
    })
  }
  $scope.getNext = function(){
      getData(nextUrl);
  }
  $scope.getPrev = function(){
    getData(prevUrl);
  }
  $scope.showCharacter = function(character) {
    $scope.character = character;
    $state.go('details');
  }
});
