'use strict';

/**
 * @ngdoc function
 * @name yoHomepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoHomepageApp
 */
angular.module('yoHomepageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
