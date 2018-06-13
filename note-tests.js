
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

 function testShowList() {
   var list  =  new NoteList();
   list.storeNote(new Note("Favorite food: pesto").text);
   list.storeNote(new Note("Favorite drink: selzer").text);
   var view = new NoteListView(list)
   assert.isTrue(view.show() === "<ul><li><div>Favorite food: pesto</div></li><li><div>Favorite drink: selzer</div></li></ul>", "returns string of HTML ")
 }

 testShowList();

 function testSingleNoteView(){
 var singleNoteView = new SingleNoteView(new Note("Favorite drink: selzer"))
 assert.isTrue(singleNoteView.display() === "<div>Favorite drink: selzer</div>", "single note view passing")
}

testSingleNoteView();
