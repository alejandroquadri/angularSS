angular.module('NoteWrangler').controller('UsersShowController', function(User, $scope, $routeParams){
  $scope.user = User.get({id: $routeParams.id});
  console.log($scope.user);
});
