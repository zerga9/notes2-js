function NoteControllerTest() {
  var controller = new NoteController();
  var list = new NoteList();
  list.storeNote("testing controller")
  var double = { innerHTML: null }
  double.innerHTML = new NoteListView(list).show()
  assert.isTrue(double.innerHTML === `<ul><li><div><a href='#notes/0'>testing controller</a></div></li></ul`, "Notecontroller tested ")
};

NoteControllerTest();
