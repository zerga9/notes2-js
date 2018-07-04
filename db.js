var mongoose = require('mongoose');
mongoose.connect('mongodb://gadiza:12345A@ds125181.mlab.com:25181/notes-for-note-app')


var NoteSchema = new mongoose.Schema({
  text: String
});
mongoose.model('Note', NoteSchema);
module.exports = mongoose.model('Note');
