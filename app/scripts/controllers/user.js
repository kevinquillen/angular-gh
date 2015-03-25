'use strict';

/**
 * @ngdoc function
 * @name angularGhApp.controller:UserController
 * @description
 * # UserController
 * Controller of the angularGhApp
 */
angular.module('angularGhApp')
  .controller('UserController', function ($scope, github, $routeParams) {
    var onError = function(reason) {
      $scope.error = 'There was an error: ' + reason;
    };

    var onUserComplete = function(data) {
      $scope.user = data;
    };

    var onReposComplete = function(data) {
      $scope.repos = data;
    };

    $scope.username = $routeParams.username;
    github.getUser($routeParams.username).then(onUserComplete, onError);
    github.getUserRepos($routeParams.username).then(onReposComplete, onError);
  });
