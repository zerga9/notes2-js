(function (exports) {
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.storeNote = function (string) {
    this.notes.push(string)
  }

  NoteList.prototype.getNoteById = function(string) {
    return this.notes.indexOf(string)

  }

  exports.NoteList = NoteList;
})(this);
