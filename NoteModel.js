var NoteSchema = new mongoose.Schema({
  text: String
});
mongoose.model('Note', NoteSchema);
module.exports = mongoose.model('Note');
