'use strict';

/**
 * @ngdoc overview
 * @name angularGhApp
 * @description
 * # angularGhApp
 *
 * Main module of the application.
 */
angular
  .module('angularGhApp', [
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
      .when('/user/:username', {
        templateUrl: 'views/user/detail.html',
        controller: 'UserController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
