angular.module('mainApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "home/home.html",
    })

    .state("details", {
      url: "/details",
      templateUrl: "details/details.html",
    });

  $urlRouterProvider.otherwise("/")


})
