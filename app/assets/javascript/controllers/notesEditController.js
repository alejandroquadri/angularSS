angular.module('NoteWrangler').controller('NotesEditController', function(Note, $scope, Category, $routeParams,$location){
 $scope.note = Note.get({id: $routeParams.id});
 $scope.isSubmitting = false;
 $scope.categories = Category.query();

 $scope.saveNote = function(note){
   $scope.isSubmitting = true;
   note.$update() //este metodo esta definido especialmente en el $resource (en note.js), el signo $ se lo pone solo
    .finally(function(){
      $scope.isSubmitting = false; // esto es para que una vez que termina el update vuelva a habilitarse.
      $location.path("/notes/"+note.id);
      //este servicio, location, no lo explicaron en el curso. Atencion lo inyecta arriba
      //poniendo eso te manda una vez terminado a la pagina show.
      //se puede usar note.id, porque se paso en la funcion la instancia note
    })
 }
});
