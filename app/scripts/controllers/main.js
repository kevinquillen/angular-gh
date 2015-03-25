'use strict';

/**
 * @ngdoc function
 * @name angularGhApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGhApp
 */
angular.module('angularGhApp')
  .controller('MainCtrl', function ($scope, github) {
    var onUserComplete = function(data) {
      $scope.user = data;
    };

    var onError = function(reason) {
      $scope.error = 'There was an error';
    };

    $scope.search = function(username) {
      github.getUser(username).then(onUserComplete, onError);
    };
  });
