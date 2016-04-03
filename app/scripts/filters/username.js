'use strict';

angular.module('myAdminApp')
  .filter('userFullName', function () {
    return function (input,user) {
      if(!user){
          return input;
      }
      if(user.gender=='female'){
          return "Mrs "+input;
      }
      else{
          return "Mr "+input;
      }

    };
  });
