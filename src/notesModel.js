(function(exports) {

  function Note(text) {
    this.text = text;
    this.shortened = this.shortenNote();
  }

  Note.prototype = {
    shortenNote: function() {
      console.log(this.text);
      return this.text.substring(0, 20);
    }
  };

  exports.Note = Note;
})(this);
