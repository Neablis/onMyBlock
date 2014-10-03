'use strict';

/**
 * @ngdoc function
 * @name onMyBlockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onMyBlockApp
 */
angular.module('onMyBlockApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.class = 'main';

    $scope.selected = '';

    $scope.temp = function () {
        $scope.selected = 'temp';
    };

    $scope.house = function () {
        $scope.selected = 'house';
    };

    $scope.submit = function () {
       if ($scope.selected === 'temp') {
           $location.path('/tempListing');
       } else {
           $location.path('/houseListing');
       }
    };
  });
