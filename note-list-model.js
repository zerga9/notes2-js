(function (exports) {
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.createNote = function (note) {
    this.notes.push(note)
  }
  exports.NoteList = NoteList;
})(this);
