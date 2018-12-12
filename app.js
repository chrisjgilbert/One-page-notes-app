window.addEventListener("load", function() {

  var element = "submit";
  var note = Note;
  var notesView = new NotesView();
  var controller = new NotesController(note, notesView, element);

  controller.updateDOM();
})
