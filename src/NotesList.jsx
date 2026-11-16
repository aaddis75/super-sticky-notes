import Note from "./Note";

function NotesList(props) {
  function renderNote(note) {
    return <Note note={note} key={note.id} />;
  }
  const noteElements = props.notes.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
}

export default NotesList;
