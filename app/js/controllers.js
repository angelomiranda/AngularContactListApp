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

        $scope.mainImage = cars.imageThumbnails[0];

        $scope.setImage = function(imgurl){
          $scope.mainImage = imgurl;
        }

      });

};

carApp.controller(Controllers);