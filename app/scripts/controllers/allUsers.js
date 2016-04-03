'use strict';

angular.module('myAdminApp')
  .controller('ListUserCtrl', function ($scope,UserService) {

	  UserService.loadAllUsers().success(function(resp){
	        $scope.users = resp;
	    });  
  });
