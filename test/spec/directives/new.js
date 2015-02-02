'use strict';

describe('Directive: new', function () {

  // load the directive's module
  beforeEach(module('angularsysApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<new></new>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the new directive');
  }));
});
