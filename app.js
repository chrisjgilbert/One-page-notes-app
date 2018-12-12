window.addEventListener("load", function() {

  var note = Note
  var notesView = new NotesView();
  var controller = new NotesController(note, notesView);

  controller.updateDOM();
})
