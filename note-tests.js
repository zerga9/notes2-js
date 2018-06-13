
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
