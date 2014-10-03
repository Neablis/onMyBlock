'use strict';

/**
 * @ngdoc function
 * @name onMyBlockApp.controller:HouselistingCtrl
 * @description
 * # HouselistingCtrl
 * Controller of the onMyBlockApp
 */
angular.module('onMyBlockApp')
  .controller('HouselistingCtrl', function ($scope) {
    $scope.class = 'houseListing';

    $scope.status = 'loading...';
    $scope.country = 'Select Country';
    $scope.data = {
        'locations': {'blah':1}
    };

    //load JSON data
    /*
    $http.get('countries.json')
        .then(function(res) {
            $scope.data.locations.countries = res.data;
            $scope.status = "loaded "+$scope.data.locations.countries.length+" countries.";
            $scope.$apply();
        });
    */
  });
