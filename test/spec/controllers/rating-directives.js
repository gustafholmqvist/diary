'use strict';

describe('Controller: RatingDirectivesCtrl', function () {

  // load the controller's module
  beforeEach(module('diaryApp'));

  var RatingDirectivesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RatingDirectivesCtrl = $controller('RatingDirectivesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
