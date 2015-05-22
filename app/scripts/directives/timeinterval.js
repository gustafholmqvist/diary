'use strict';

/**
 * @ngdoc directive
 * @name diaryApp.directive:timeinterval
 * @description
 * # timeinterval
 */
angular.module('diaryApp')
  .directive('timeinterval', function () {
    return {
      templateUrl: 'scripts/directives/timeinterval.html',
      restrict: 'E',
      scope: {
     	 title: '=',
     	 timestampFrom: '=',
     	 timestampTo: '=',
       edit: '='
    	},
      link: function postLink(scope, element, attrs) {
      	
      }
    };
  });
