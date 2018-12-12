(function(exports) {

  var noteColors = ['red', 'blue', 'yellow', 'green' ];

  function Note(text) {
    this.text = text;
  }

  Note.prototype.randNoteColor = function() {
    return noteColors[Math.floor(Math.random() * noteColors.length)];
  }

  Note.prototype.getNote = function() {
    return this.text;
  }

  Note.prototype.trimNote = function() {
    this.text.substring(0,20);
  }

  exports.Note = Note;
})(this);
