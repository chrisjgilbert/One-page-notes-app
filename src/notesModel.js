(function(exports) {

  var note;
  var noteColors = ['red', 'blue', 'yellow', 'green' ];

  function trimNote() {
    note.substring(0,20);
  }

  function randNoteColor() {
    return noteColors[Math.floor(Math.random() * noteColors.length)];
  }

  function saveNote(text) {
    note = text;
  }

  function getNote() {
    return note;
  }

  exports.randNoteColor = randNoteColor;
  exports.saveNote = saveNote;
  exports.getNote = getNote;
})(this);
