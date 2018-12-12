window.addEventListener("load", function() {

  var app = "app";
  var element = "submit";

  var note = Note;
  var notesView = new NotesView();

  var controller = new NotesController(note, notesView, element, app);

  controller.updateDOM();
})
