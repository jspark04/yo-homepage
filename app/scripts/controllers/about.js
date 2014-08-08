'use strict';

/**
 * @ngdoc function
 * @name yoHomepageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoHomepageApp
 */
angular.module('yoHomepageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
