function Note(props) {
  function updateTitle(event) {
    const updatedValue = event.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updatedValue);
  }

  function updateDescription(event) {
    const updatedValue = event.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  }

function clickDelete() {
  props.deleteNote(props.note.id);
}

  return (
    <li className="note">
      <input
        value={props.note.title}
        onChange={updateTitle}
        type="text"
        aria-label="Title"
        placeholder="ToDo Today"
        className="note__title"
      />
      <textarea
        value={props.note.description}
        onChange={updateDescription}
        aria-label="Description"
        placeholder="Take a nap!"
        className="note__description"
      />
      <span
        className="note__delete"
        onClick={clickDelete}
      >
        X
      </span>
    </li>
  );
}

export default Note;
