//immediately Invoked Function Expression (or IIFE)
(function(exports) {
  function Note(id,text) {
    this.text = text
    this.id = id
  };

  exports.Note = Note;
})(this);
