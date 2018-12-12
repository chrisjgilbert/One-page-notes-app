"use strict";

(function(exports) {

  function Note(text) {
    this.text = text;
    this.shortenedText = this.text.substring(0, 20);
  }

  exports.Note = Note;
})(this);
