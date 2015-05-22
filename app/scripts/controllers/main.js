'use strict';

/**
 * @ngdoc function
 * @name diaryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the diaryApp
 */

 
angular.module('diaryApp')
  .controller('MainCtrl', ['$scope', '$firebaseObject', 'Dates', function ($scope, $firebaseObject, Dates) {
  	var self = this;
  	   
  	console.log('ok');
  		var categories = {
  			health: {title: 'overall health', type: 'simplescore', score: 5, infotext: ''},
  			lunch: {title: 'lunch', type: 'timestamp',  time: '', infotext: ''},
  			rest: {title: 'rest', type: 'timeinterval', timeFrom: '', timeTo: '', text: ''},
  			mood: {title: 'mood', type: 'simplescore', score: 5, text: ''},
  			energy: {title: 'energy', type: 'simplescore', score: 5, text: ''},
  			
  		};


		var a = Dates();
		a.$bindTo($scope, "dates");
       	a.$loaded().then(function() {
    		
    			console.log(1);
    			$scope.currentDay = new Date();
				
       	});
  
  $scope.dates = {};	
	$scope.$watch('currentDay', function() {
		console.log(2);
		if ($scope.currentDay === undefined) {
			console.log('undefined');
			return;
		}
		//$scope.currentDayString = $scope.currentDay.toLocaleDateString();
		
		var datekey = $scope.currentDay.getFullYear() + '-' + ($scope.currentDay.getMonth() + 1) + '-' + $scope.currentDay.getDate();
		if ($scope.dates[datekey] === undefined) {
			var template = [];

    			template.push([angular.copy(categories.health)]);
	    		template.push([angular.copy(categories.lunch)]);
	    		template.push([angular.copy(categories.rest), angular.copy(categories.mood)]);
	    		//template.push(angular.copy(categories.mood));
	    		//template.push(angular.copy(categories.energy));
	    
	    		var newDate= {};
    			newDate.date === $scope.currentDay; 
    			newDate.notes = template;
    			$scope.dates[datekey] = newDate;
		}
		console.log(datekey, newDate, $scope.day, $scope.dates[datekey]);
		$scope.day = $scope.dates[datekey];
	});
    
    $scope.format = 'yyyy-MM-dd';
   
  	$scope.open = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();

	    $scope.opened = true;
	  };

    
  }]
  );


angular.module('diaryApp').factory("Dates", ["$firebaseObject",
  function($firebaseObject) {
    return function() {
      	// create a reference to the Firebase where we will store our data
    	
    
    
    	var ref = new Firebase("https://gustaf812361523.firebaseio.com/dates");
    	var profileRef = ref.child('date');

      	// return it as a synchronized object
     	return $firebaseObject(profileRef);
      	//var a = Dates("5556");

       	
    }
  }
]);

