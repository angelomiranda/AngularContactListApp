'use strict';

/* App Module */

var carApp = angular.module('carApp', [ 'ngRoute', 'ngResource', 'ngAnimate', 'carAnimations']);

carApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })
    .when('/cars', {
      templateUrl: 'partials/car-list.html',
      controller: 'CarListCtrl'
    })
    .when('/cars/:cars', {
      templateUrl: 'partials/car-detail.html',
      controller: 'CarDetailCtrl'
    });

});

