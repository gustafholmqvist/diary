'use strict';

/**
 * @ngdoc overview
 * @name diaryApp
 * @description
 * # diaryApp
 *
 * Main module of the application.
 */
angular
  .module('diaryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'firebase',
    'ngDraggable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller  : 'MainCtrl'
        
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/rating-directives', {
        templateUrl: 'views/rating-directives.html'
      })
      .when('/edit-template', {
        templateUrl: 'views/edit-template.html'
      })
      .when('/test', {
        templateUrl: 'views/test.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
