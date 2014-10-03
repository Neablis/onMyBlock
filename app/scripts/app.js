'use strict';

/**
 * @ngdoc overview
 * @name onMyBlockApp
 * @description
 * # onMyBlockApp
 *
 * Main module of the application.
 */
angular
  .module('onMyBlockApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tempListing', {
        templateUrl: 'views/templisting.html',
        controller: 'TemplistingCtrl'
      })
      .when('/houseListing', {
        templateUrl: 'views/houselisting.html',
        controller: 'HouselistingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
