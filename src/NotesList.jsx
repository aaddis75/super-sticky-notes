import Note from "./Note";

function NotesList(props) {
  function renderNote(note) {
    return <Note note={note} key={note.id} onType={props.onType} deleteNote={props.deleteNote}/>;
  }
  function keepSearchMatches(note) {
    return note.doesMatchSearch;
  }
  const searchMatches = props.notes.filter(keepSearchMatches);

  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
}

export default NotesList;
