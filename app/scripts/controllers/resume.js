'use strict';

/**
 * @ngdoc function
 * @name yoHomepageApp.controller:ResumeCtrl
 * @description
 * # ResumeCtrl
 * Controller of the yoHomepageApp
 */
angular.module('yoHomepageApp')
    .controller('ResumeCtrl', function ($rootScope, $scope, $location, $anchorScroll) {
        $rootScope.currentState = 'resume';

        $scope.goToTop = function() {
            console.log('Entering scroll function goToTop()');

            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('top');

            // call $anchorScroll()
            $anchorScroll();
        };
        $scope.goToTop();
    }
);
