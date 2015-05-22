'use strict';

/**
 * @ngdoc directive
 * @name diaryApp.directive:timestamp
 * @description
 * # timestamp
 */
angular.module('diaryApp')
  .directive('timestamp', function () {
    return {
      templateUrl: 'scripts/directives/timestamp.html',
      restrict: 'E',
      scope: {
     	 title: '=',
     	 timestamp: '=',
       edit: '='
    	},
      link: function postLink(scope, element, attrs) {
      	if (!scope.timestamp) {
          scope.timestamp = new Date();
        }
      }
    };
  });
