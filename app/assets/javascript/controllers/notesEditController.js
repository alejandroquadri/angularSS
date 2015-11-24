angular.module('NoteWrangler').controller('NotesEditController', function(Note, $scope, $routeParams){
 console.log('anda el edit');
 $scope.note = Note.get({id: $routeParams.id});
 $scope.saveNote = function(note){
   note.$update(); //este metodo esta definido especialmente en el $resource (en note.js), el signo $ se lo pone solo
 }
});
