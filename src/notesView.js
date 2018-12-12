(function(exports) {

  function NotesView(note) {
    this.note = note;
    this.notes = [];
  }

  NotesView.prototype.add = function(note) {
    this.notes.push(note);
  }

  NotesView.prototype.renderApp = function() {
    return [
      "<form>",
        "<input id='text' type='text'></input>",
        "<input type='submit'></input>",
      "</form>",
      this.notes.map(function(note) {
        return "<p style=color:" + note.color + ">"+ note.text + "</p>"
      }).join("")
    ].join("")
  }

  exports.NotesView = NotesView;
})(this);
