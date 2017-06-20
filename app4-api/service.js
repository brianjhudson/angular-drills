angular.module("myApp").service('myService', function($http) {
  this.getData = function(index) {
    return $http.get('http://swapi.co/api/people/' + index).then(function(result){
      return result;
    });
  };
})
