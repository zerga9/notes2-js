(function (exports){
  function NoteController(list = new NoteList()){
    this.list = list
    this.list.storeNote("Favorite drink: selzer")
    this.list.storeNote("Gadiza is the best")
    this.list.storeNote("First note-app!!!")
    this.view = new NoteListView(this.list)

  }
    NoteController.prototype.getHtml = function () {
    document.getElementById('note').innerHTML = this.view.show();
    // window.addEventListener("hashchange", this.showNoteForCurrentPage());
    this.makeUrlChangeShowNoteForCurrentPage()
  }


  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    var x = this.showNoteForCurrentPage()
    window.addEventListener("hashchange", x);
  };
// this.makeUrlChangeShowNoteForCurrentPage();

  NoteController.prototype.showNoteForCurrentPage = function() {
    this.showNote(this.getNoteFromUrl(window.location));
    console.log(window.location)
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    return location.hash.split("#")[1];
    console.log(location.hash.split("#")[1])
  };

  NoteController.prototype.showNote = function(note) {
    var id = note.slice(-1)
    console.log(id)
    var noteId = this.list.getNoteById(id);
    console.log(this.list)

    single = new SingleNoteView(noteId.text)
    document.getElementById("single-note").innerHTML = single.display();
      console.log(single)
  };
    exports.NoteController = NoteController

})(this);
