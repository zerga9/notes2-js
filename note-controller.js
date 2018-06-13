// document.getElementById('app').innerHTML = "Howdy World";
(function (exports){
  function NoteController(list){
    this.list = list
    this.list.storeNote(new Note("Favorite drink: selzer").text)
    this.view = new NoteListView(this.list)
  }
    NoteController.prototype.getHtml = function () {
    document.getElementById('app').innerHTML = this.view.show();
  }
    exports.NoteController = NoteController

})(this);
