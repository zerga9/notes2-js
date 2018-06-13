//immediately Invoked Function Expression (or IIFE)
(function(exports) {
  function Note(string) {
    this.text = string
  };
  exports.Note = Note;
})(this);
