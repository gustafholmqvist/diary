'use strict';

/**
 * @ngdoc function
 * @name diaryApp.controller:RatingDirectivesCtrl
 * @description
 * # RatingDirectivesCtrl
 * Controller of the diaryApp
 */
angular.module('diaryApp')
  .controller('RatingDirectivesCtrl', function ($scope) {
  	console.log('aok');
    this.directives = [
      {type: 'simplescore', title: 'simplescore', score: 5},
      {type: 'text', title: 'text', text: 'test'},
      {type: 'timestamp', title: 'timestamp', timestamp: undefined},
 		{type: 'timeinterval', title: 'timeinterval', timestampFrom: '8:00', timestampTo: '10:00'}
    ];
  });
