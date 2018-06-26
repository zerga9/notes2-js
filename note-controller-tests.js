function NoteControllerTest() {
  var controller = new NoteController(new NoteList);
  controller.getHtml();
  console.log(document.getElementById('note').innerHTML)
  assert.isTrue(document.getElementById('note').innerHTML === `<ul><li><div><a href="#notes/0">Favorite drink: selz</a></div></li><li><div><a href="#notes/1">Gadiza is the best</a></div></li><li><div><a href="#notes/2">First note-app!!!</a></div></li></ul>`, "notecontroller tested ")
};

NoteControllerTest();
