(function(exports) {

  var textArea = '<h1 id="title">Notes</h1>' +
  '<textarea id="text" rows="4" cols="50"></textarea><br>' +
  '<input id="submit" type="submit" value="Add note"><br>';

  var noteArea = '<p id="notes">Notes:</p>';

  function renderTextArea() {
    return textArea;
  }

  function renderNoteArea() {
    return noteArea;
  }

  function renderNote() {
    return "<p style=color:" + randNoteColor() + ">"+ getNote() +"</p>";
  }

  exports.renderTextArea = renderTextArea;
  exports.renderNoteArea = renderNoteArea;
  exports.renderNote = renderNote;
})(this);
