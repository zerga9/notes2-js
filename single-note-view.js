(function(exports) {
  function SingleNoteView(text) {
    this.text = text

  }
  SingleNoteView.prototype.display = function() {
    return `<div>${this.text}</div>`
  }
  exports.SingleNoteView = SingleNoteView;
})(this);
