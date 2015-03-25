'use strict';

(function() {
  var github = function($http) {

    var getUser = function(username) {
      return $http.get('https://api.github.com/users/' + username)
        .then(function(response) {
          return response.data;
        });
    };

    var getUserRepos = function(username) {
      return $http.get('https://api.github.com/users/' + username + '/repos')
        .then(function(response) {
          return response.data;
        });
    };

    return {
      getUser: getUser,
      getUserRepos: getUserRepos
    };
  };

  var module = angular.module('angularGhApp');
  module.factory('github', github);
})();