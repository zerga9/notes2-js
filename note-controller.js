(function (exports){
  function NoteController(){
    this.list = new NoteList();
    this.list.storeNote("Favorite drink: selzer")
    this.list.storeNote("Gadiza is the best")
    this.list.storeNote("First note-app!!!")
    this.view = new NoteListView(this.list)
  };

  NoteController.prototype.getHtml = function () {
    document.getElementById('note').innerHTML = this.view.show();
  }


  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    var thisNote = document.getElementById('single-note')
    var list = this.list

    window.addEventListener("hashchange", function(event){
      event.preventDefault();
      var id = getNoteID(window.location)
      console.log(id)
      var singleNote = list.getNoteById(id.slice(-1))
      thisNote.innerHTML = new SingleNoteView(singleNote).display()
    });
  }

    function getNoteID(location){
        return location.hash.split("#")[1];
      };



exports.NoteController = NoteController;

})(this);
