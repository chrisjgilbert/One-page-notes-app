"use strict";

(function() {
  window.addEventListener("load", function() {

      var app = "app";
      var element = "submit";

      var controller = new NotesController(
        Note,
        new NotesView,
        element,
        app
      );

      controller.updateDOM();
    })
})();
