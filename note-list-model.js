(function (exports) {
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.storeNote = function (string) {
    this.notes.push(string)
  }
  exports.NoteList = NoteList;
})(this);
