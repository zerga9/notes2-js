(function (exports) {
  function NoteListView(list) {
    this.list = list
  };

  NoteListView.prototype.show = function () {
    return "<ul><li><div>" + this.list.notes.join("</div></li><li><div>")+ "</div></li></ul>"
  };
  exports.NoteListView = NoteListView;

})(this);
