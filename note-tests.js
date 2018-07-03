
  function testStoreNote() {
    var note = new Note(0, "My favorite language is JavaScript");
    assert.isTrue(note.text === "My favorite language is JavaScript", "note stores string")
  }

  testStoreNote();

  function testStoreNoteList() {
    var list = new NoteList();
    list.storeNote("My favorite language is JavaScript");
    list.storeNote("I love Ruby too");
    assert.isTrue(list.notes[0].text === "My favorite language is JavaScript", "stores first note")
    assert.isTrue(list.notes[1].text === "I love Ruby too", "stores second note")
  }
 testStoreNoteList();

 function testSingleNoteView(){
 var singleNoteView = new SingleNoteView(new Note(1, "Favorite drink: selzer"))
 assert.isTrue(singleNoteView.display() === "<div>Favorite drink: selzer</div>", "single note view passing")
}

testSingleNoteView();

function testAbbreviationNote(){
  var list  =  new NoteList();
  list.storeNote("Favorite food: pesto");
  list.storeNote("Favorite drink: selzer");
  var view = new NoteListView(list)
  console.log(view.show())
  assert.isTrue(view.show() === "<ul><li><div><a href='#notes/0'>Favorite food: pesto</a></div></li><li><div><a href='#notes/1'>Favorite drink: selz</a></div></li></ul" )
}
testAbbreviationNote();

function testgetIdNote(){
  var list = new NoteList();
  list.storeNote("Favorite food: pesto");
  console.log(list.notes)
  console.log(list.getIdNote(note.text = "Favorite food: pesto"))
  assert.isTrue(list.getIdNote(new Note(0, "Favorite food: pesto")) === 0, "first note has id of 0")
  assert.isTrue(list.getIdNote(new Note(1, "Favorite food: pesto")) === 1, "second note has id of 1")

}
testgetIdNote();
