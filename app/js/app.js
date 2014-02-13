'use strict';

/* App Module */

var contactApp = angular.module('contactApp', [ 'ngRoute', 'ngResource' ]);

contactApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })
    .when('/contacts', {
      templateUrl: 'partials/contact-list.html',
      controller: 'ContactListCtrl'
    })
    .when('/contacts/:contacts', {
      templateUrl: 'partials/contact-detail.html',
      controller: 'ContactDetailCtrl'
    });

})