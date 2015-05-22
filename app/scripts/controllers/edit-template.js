'use strict';

/**
 * @ngdoc function
 * @name diaryApp.controller:EditTemplateCtrl
 * @description
 * # EditTemplateCtrl
 * Controller of the diaryApp
 */
angular.module('diaryApp')
  .controller('EditTemplateCtrl',  function ($scope) {
  	//console.log('editTemplate');
        $scope.draggableObjects = [
      {type: 'simplescore', title: 'simplescore', score: 5},
      {type: 'text', title: 'text', text: 'test'},
      {type: 'timestamp', title: 'timestamp', timestamp: '8:00'},
 		{type: 'timeinterval', title: 'timeinterval', timestampFrom: '8:00', timestampTo: '10:00'}
    ];
        $scope.droppedObjects1 = [];
        $scope.droppedObjects2= [];
        $scope.onDropComplete1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            if (index == -1)
            $scope.droppedObjects1.push(data);
        }
        $scope.onDragSuccess1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects1.splice(index, 1);
            }
        }
        $scope.onDragSuccess2=function(data,evt){
            var index = $scope.droppedObjects2.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects2.splice(index, 1);
            }
        }
        $scope.onDropComplete2=function(data,evt){
            var index = $scope.droppedObjects2.indexOf(data);
            if (index == -1) {
                $scope.droppedObjects2.push(data);
            }
        }
        var inArray = function(array, obj) {
            var index = array.indexOf(obj);
        }
      });
  