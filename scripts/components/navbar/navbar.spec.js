describe('NavbarController', function () {
  'use strict';

  beforeEach(module('app'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('NavbarController', {
      $scope: scope
    });

  }));

  it('should exist', function() {
    expect(ctrl).to.not.equal(undefined);
  });

  it('should check to see if user is logged in', function() {
    expect(scope.loggedIn).to.not.equal(undefined);
  });

  it('should direct users to splash page when logo is clicked', function() {
    expect(scope.goHome).to.be.a('function');
  });

  it('should display popup when "Sign Up" or "Log In" buttons are clicked', function() {
    expect(scope.callPopup).to.be.a('function');
  });

  it('should display *username* and "Sign Out" buttons instead of "Sign Up" and "Log In" buttons if user is logged in', function() {
    scope.loggedIn = false;
    scope.toggleLoginStatus();
    expect(scope.loggedIn).to.equal(true);
  });

  it('should direct users to private profile page when "Become A Sitter" button is clicked', function() {
    expect(scope.becomeSitter).to.be.a('function');
  });

  it('should display sign up popup when "Sign Up" button is clicked', function() {
    expect(scope.signup).to.be.a('function');
  });

  it('should display log in popup when "Log In" button is clicked', function() {
    expect(scope.login).to.be.a('function');
  });

  xit('should send a post request to Facebook when user clicks Sign Up With Facebook on popup', function() {
    //
  });

  xit('should send a post request to Facebook when user clicks Log In With Facebook on popup', function() {
    //
  });

  xit('should send a post request to the local-signup route when sign up is clicked with valid inputs', function() {

  });

  xit('should send a post request to the local-login route when log in is clicked with valid inputs', function() {
  
  });

});