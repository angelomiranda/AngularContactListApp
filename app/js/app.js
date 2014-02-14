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

});

contactApp.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                alert('image is loaded');
            });
        }
    };
});