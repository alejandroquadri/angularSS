angular.module('NoteWrangler').controller('NotesShowController', function(Note, $scope, $routeParams, $location){
  $scope.note = Note.get({id: $routeParams.id});

  $scope.deleteNote = function(note){
    note.$remove().then(function(){
      //usa then en lugar de finally, a diferencia del controller de edit porque si llega a haber algun error lo puede manejar
      $location.path("/notes");
    })
  }
});
