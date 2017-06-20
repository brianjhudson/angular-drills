angular.module("mainApp").service("mainService", function($http){
  this.getData = function(url) {
    return $http.get(url);
  }
})
