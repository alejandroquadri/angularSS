angular.module('NoteWrangler')
.factory('Note', function($resource){
    return $resource('/notes/:id', {id: "@id"}, {
      //en la inea de arriba primero se pone la direccion. Hay que aclarar que parametro es id.
      // el segundo objeto lo que hace es casualmente eso. poniendo @id estamos diciendo que id corresponde al id de esta instancia
      update: {
        method: "PUT"
      }
    });
});
