'use strict';

/**
 * @ngdoc directive
 * @name diaryApp.directive:simplescore
 * @description
 * # simplescore
 */
angular.module('diaryApp')
  .directive('simplescore', function () {
    return {
      templateUrl: 'scripts/directives/simplescore.html',
      restrict: 'E',
      scope: {
     	 title: '=',
     	 score: '=',
       edit: '='
    	},
      link: function postLink(scope, element, attrs) {
      	//scope.title='tetee';
        //element.text('this is the simplescore directive');
      }
    };
  });
