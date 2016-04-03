'use strict';

myAdminApp.directive('userInfo', function (User,$location) {
    return {
        templateUrl: 'scripts/directives/user.html',
        replace: false,
        restrict: 'A',
        scope: {
            user: '=',
            ondelete:'&'
        },
        link: function postLink(scope, element, attrs) {
            scope.displayAction=false;
            var mouseOverHandler = function () {
                scope.$apply(function () {
                    scope.displayAction=true;
                });
            };

            var mouseOutHandler = function () {
                scope.$apply(function () {
                    scope.displayAction=false;
                });
            };
            element.hover(mouseOverHandler,mouseOutHandler);

            scope.delete= function () {
                var r = confirm("Voulez vous supprimer cet utilisateur ?");
                if (r == true) {
                	User.deleteUser(scope.user.id).then(function(resp){
                        scope.ondelete({user:scope.user});
                        $location.path('/list');
                    })
                }
            }

        }
    };
});
