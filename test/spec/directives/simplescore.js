'use strict';

describe('Directive: simplescore', function () {

  // load the directive's module
  beforeEach(module('diaryApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<simplescore></simplescore>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the simplescore directive');
  }));
});
