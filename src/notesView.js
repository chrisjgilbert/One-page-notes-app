(function(exports) {

  function NotesView(note) {
    this.note = note;
    this.notes = [];
  }

  NotesView.prototype = {
    add: function(note) {
      this.notes.push(note);
    },

    renderApp: function() {
      return [
        "<h1>Notes APP</h1>",
        "<form>",
          "<input id='text' type='text'></input>",
          "<input type='submit'></input>",
        "</form>",
        this.notes.map(function(note) {
          return "<p>"+ note.shortened + "</p>"
        }).join("")
      ].join("")
    }
  }

  exports.NotesView = NotesView;
})(this);
