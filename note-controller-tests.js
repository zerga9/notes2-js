function NoteControllerTest() {
  var controller = new NoteController(new NoteList);
  console.log(document.getElementById("app").innerHTML)

  assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Favorite drink: selzer</div></li></ul>", "notecontroller tested ")
};

NoteControllerTest();
