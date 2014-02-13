'use strict';

/* Controllers */

var Controllers = {};
Controllers.ContactListCtrl = function($scope, $http) {
  $http({ method: 'GET', url: 'contacts/contacts.json' })
    .success(function(contacts){
      $scope.contacts = contacts;
    });
}

Controllers.ContactDetailCtrl = function($scope, $routeParams) {
    $http({ method: 'GET', url: 'contacts/' + $routeParams.contacts + '.json'})
      .success(function(contacts) {
        $scope.contacts = contacts;
      });
};

contactApp.controller(Controllers);