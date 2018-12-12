(function(exports) {

  function renderApp() {
   document.getElementById("textArea").innerHTML = renderTextArea();
   document.getElementById("noteArea").innerHTML = renderNoteArea();
  }

  function listenToSubmit() {
    document.getElementById("submit").addEventListener("click", function(){
      var note = document.getElementById('text').value;
      saveNote(note);
      showNote();
    })
  }

  function showNote() {
    document.getElementById("notes").innerHTML += renderNote();
  }

  exports.renderApp = renderApp;
  exports.listenToSubmit = listenToSubmit;
})(this);
