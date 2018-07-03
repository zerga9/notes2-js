function NoteControllerTest() {
  var controller = new NoteController();
  var list = new NoteList();
  list.storeNote("testing controller")
  var double = { innerHTML: null }
  double.innerHTML = new NoteListView(list).show()
  console.log(double.innerHTML);

  console.log(controller.getHtml())
  console.log(document.getElementById('note').innerHTML)
  assert.isTrue(double.innerHTML === `<ul><li><div><a href='#notes/0'>testing controller</a></div></li></ul`, "Notecontroller tested ")
};

NoteControllerTest();
