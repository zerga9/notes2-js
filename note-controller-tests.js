function NoteControllerTest() {
  var controller = new NoteController(new NoteList);
  controller.getHtml();
  assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div>Favorite drink: selz</div></li></ul>", "notecontroller tested ")
};

NoteControllerTest();
