(function(exports) {

  var textArea = '<h1 id="title">Notes</h1>' +
  '<textarea id="text" rows="4" cols="50"></textarea><br>' +
  '<input id="submit" type="submit" value="Add note"><br>';

  var noteArea = '<p id="notes">Notes:</p>';

  function displayTextArea() {
    return textArea;
  }

  function displayNoteArea() {
    return noteArea;
  }

  function displayNote() {
    return "<p style=color:" + randNoteColor() + ">"+ getNote() +"</p>";
  }

  exports.displayTextArea = displayTextArea;
  exports.displayNoteArea = displayNoteArea;
  exports.displayNote = displayNote;
})(this);
