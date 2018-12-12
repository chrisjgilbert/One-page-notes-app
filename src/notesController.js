(function(exports) {

  function NotesController(note, notesView) {
    this.note = note;
    this.notesView = notesView;
    this._listenToSubmit();
  }

  NotesController.prototype._listenToSubmit = function() {
    var self = this;
    window.addEventListener('submit', function(event) {
      event.preventDefault();
      var note = new self.note(event.target[0].value)
      self.notesView.add(note)
      self.updateDOM();
    })
  }

  NotesController.prototype.updateDOM = function() {
    document.getElementById("app").innerHTML = this.notesView.renderApp();
  }

  exports.NotesController = NotesController;
})(this);
