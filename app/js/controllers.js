'use strict';

/* Controllers */

var Controllers = {};
Controllers.CarListCtrl = function($scope, $http) {
  $http({ method: 'GET', url: 'cars/cars.json' })
    .success(function(cars){
      $scope.cars = cars;
    });
}

Controllers.CarDetailCtrl = function($scope, $routeParams, $http) {
    $http({ method: 'GET', url: 'cars/' + $routeParams.cars + '.json'})
      .success(function(cars) {

        $scope.cars = cars;

        $scope.main = cars.imageMain;

        $scope.setImage = function(imgurl){
          $scope.main = imgurl;
        }

      });

};

carApp.controller(Controllers);