
  function testStoreNote() {
    var note = new Note("My favorite language is JavaScript");
    assert.isTrue(note.text === "My favorite language is JavaScript", "note stores string")
  }

  testStoreNote();

  function testStoreNoteList() {
    var list = new NoteList();
    list.storeNote(new Note("My favorite language is JavaScript").text);
    list.storeNote(new Note("I love Ruby too").text);
    assert.isTrue(list.notes[0] === "My favorite language is JavaScript", "stores first note")
    assert.isTrue(list.notes[1] === "I love Ruby too", "stores second note")
  }
 testStoreNoteList();

 function testSingleNoteView(){
 var singleNoteView = new SingleNoteView(new Note("Favorite drink: selzer"))
 assert.isTrue(singleNoteView.display() === "<div>Favorite drink: selzer</div>", "single note view passing")
}

testSingleNoteView();

function testAbbreviationNote(){
  var list  =  new NoteList();
  list.storeNote(new Note("Favorite food: pesto").text);
  list.storeNote(new Note("Favorite drink: selzer").text);
  var view = new NoteListView(list)
  console.log(view.show())
  assert.isTrue(view.show() === "<ul><li><div>Favorite food: pesto</div></li><li><div>Favorite drink: selz</div></li></ul>" )
}
testAbbreviationNote();

function testgetNoteById(){
  var list = new NoteList();
  list.storeNote(new Note("Favorite food: pesto").text);
  list.storeNote(new Note("Favorite drink: selzer").text);
  assert.isTrue(list.getNoteById("Favorite food: pesto") === 0, "first note has id of 0")
  assert.isTrue(list.getNoteById("Favorite drink: selzer") === 1, "second note has id of 1")

}
testgetNoteById();
