angular.module('NoteWrangler').controller('NotesEditController', function(Note, $scope, $routeParams){
 console.log('anda el edit');
 $scope.note = Note.get({id: $routeParams.id});
});
