'use strict';

describe('Controller: EditTemplateCtrl', function () {

  // load the controller's module
  beforeEach(module('diaryApp'));

  var EditTemplateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditTemplateCtrl = $controller('EditTemplateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
