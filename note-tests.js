
  function testStoreNote() {
    var note = new Note("My favorite language is JavaScript");
    assert.isTrue(note.text === "My favorite language is JavaScript", "note stores string")
  }

  testStoreNote();

  function testStoreNoteList() {
    var list = new NoteList();
    list.createNote(new Note("My favorite language is JavaScript"));
    list.createNote(new Note("I love Ruby too"));
    assert.isTrue(list.notes[0].text === "My favorite language is JavaScript", "stores first note")
    assert.isTrue(list.notes[1].text === "I love Ruby too", "stores second note")
  }
 testStoreNoteList();
