window.onload=function(){

  // element, note, noteView

  document.getElementById("textArea").innerHTML = displayTextArea();
  document.getElementById("noteArea").innerHTML = displayNoteArea();

  function listenToSubmit() {
    document.getElementById("submit").addEventListener("click", function(){
      var note = document.getElementById('text').value;
      saveNote(note);
      showNote();
    });
  }

  function showNote() {
    document.getElementById("notes").innerHTML += displayNote();
  }

  listenToSubmit();
}
