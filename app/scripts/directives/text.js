'use strict';

/**
 * @ngdoc directive
 * @name diaryApp.directive:text
 * @description
 * # text
 */
angular.module('diaryApp')
  .directive('text', function () {
     return {
      templateUrl: 'scripts/directives/text.html',
      restrict: 'E',
      scope: {
     	 title: '=',
     	 text: '=',
     	 edit: '='
    	},
      link: function postLink(scope, element, attrs) {
      	
      }
    };
  });
