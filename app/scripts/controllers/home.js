'use strict';

/**
 * @ngdoc function
 * @name yoHomepageApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the yoHomepageApp
 */
angular.module('yoHomepageApp')
    .controller('HomeCtrl', function ($rootScope, $scope) {
        $rootScope.currentState = 'home';
    }
);
