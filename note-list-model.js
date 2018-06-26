(function (exports) {
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.storeNote = function (text) {
    var id = this.notes.length;
    var note = new Note(id, text)
    this.notes.push(note)
  }

  NoteList.prototype.getIdNote = function(note) {
    return note.id
  }

  NoteList.prototype.getNoteById = function(id){
     return this.notes[id = id]

 }
 NoteList.prototype.getNotes = function(){
   return this.notes
 }

  exports.NoteList = NoteList;
})(this);
