'use strict';

/**
 * @ngdoc function
 * @name yoHomepageApp.controller:ResumeCtrl
 * @description
 * # ResumeCtrl
 * Controller of the yoHomepageApp
 */
angular.module('yoHomepageApp')
    .controller('ResumeCtrl', function ($rootScope, $scope) {
        $rootScope.currentState = 'resume';
    }
);
