'use strict';

/**
 * @ngdoc function
 * @name diaryApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the diaryApp
 */
angular.module('diaryApp')
  .controller('TestCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
