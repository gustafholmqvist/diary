'use strict';

/**
 * @ngdoc function
 * @name diaryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the diaryApp
 */

/*

 
angular.module('diaryApp').controller("ProfileCtrl", ["$scope", "Dates",
  function($scope, Dates) {
    // create a three-way binding to our Profile as $scope.profile
    var self = this;
    var a = Dates("5556");
    a.$bindTo($scope, "date")
    a.$loaded().then(function() {
    	    	console.log($scope.date.$value);
    	if($scope.date.$value === null) {
    		$scope.date.val = 444;
    	}

    });

    
  }
]);


angular.module('diaryApp').factory("Profile", ["$firebaseObject",
  function($firebaseObject) {
    return function(username) {
      // create a reference to the Firebase where we will store our data
      var randomRoomId = Math.round(Math.random() * 100000000);
      var ref = new Firebase("https://gustaf812361523.firebaseio.com/ddd");
      var profileRef = ref.child(username);

      // return it as a synchronized object
      return $firebaseObject(profileRef);
    }
  }
]);

angular.module('diaryApp').controller("ProfileCtrl", ["$scope", "Profile",
  function($scope, Profile) {
    // create a three-way binding to our Profile as $scope.profile
    var a = Profile("physicsmarie");
    a.$bindTo($scope, "profile")
    a.$loaded().then(function() {
    	self.date={a:1};

    	$scope.profile.dates = self.date;
    });

    
  }
]);
*/
