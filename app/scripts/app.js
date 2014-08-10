'use strict';

/**
 * @ngdoc overview
 * @name yoHomepageApp
 * @description
 * # yoHomepageApp
 *
 * Main module of the application.
 */
angular
    .module('yoHomepageApp', [
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
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/resume', {
                templateUrl: 'views/resume.html',
                controller: 'ResumeCtrl'
            })
            .when('/contact', {
              templateUrl: 'views/contact.html',
              controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function($rootScope) {
        //Stuff
    })


