// vfapp.js
// create angular app
var validformApp = angular.module('validformApp', []);

// create angular controller
validformApp.controller('mainController', function($scope) {

  // function to submit the form after all validation has occurred
  $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('the form is amazing & working fine');
    }
  };
});