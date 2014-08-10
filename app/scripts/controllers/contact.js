'use strict';

/**
 * @ngdoc function
 * @name yoHomepageApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yoHomepageApp
 */
angular.module('yoHomepageApp')
    .controller('ContactCtrl', function ($rootScope, $scope, $location, $anchorScroll) {
        $rootScope.currentState = 'contact';

        $scope.goToTop = function () {
            console.log('Entering scroll function goToTop()');

            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('top');

            // call $anchorScroll()
            $anchorScroll();
        };
        $scope.goToTop();
    });
