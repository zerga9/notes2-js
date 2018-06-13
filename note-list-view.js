(function (exports) {
  function NoteListView(list) {
    this.list = list
  };

  NoteListView.prototype.show = function () {
    return "<ul><li><div>" + this.list.notes.map(note => note.slice(0,20)).join("</div></li><li><div>")+ "</div></li></ul>"
  };
  exports.NoteListView = NoteListView;

})(this);
