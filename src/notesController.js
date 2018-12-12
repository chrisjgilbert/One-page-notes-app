(function(exports) {

  function NotesController(note, notesView, element) {
    this.note = note;
    this.notesView = notesView;
    this.element = element;
    this._listenToElement();
  }

  NotesController.prototype._listenToElement = function() {
    var self = this;
    window.addEventListener(this.element, function(event) {
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
