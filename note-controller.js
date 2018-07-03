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

NoteController.prototype.addNote = function(){
  var list = this.list
  window.addEventListener("submit", function(event){
    event.preventDefault();
    var newNote = document.getElementById("addnote").value
    list.storeNote(newNote);
    updateList(list);
    textAreaReset();
  })
}
function updateList(list){
  document.getElementById('note').innerHTML = new NoteListView(list).show();
}

function textAreaReset(){
  document.getElementById('addnote').value = ""
}

exports.NoteController = NoteController;

})(this);
