function Note (props) {
    return (
         <li className="note">
        <input value={props.note.title}
          type="text"
          aria-label="Title"
          placeholder="ToDo Today"
          className="note__title"
        />
        <textarea value={props.note.description}
          aria-label="Description"
          placeholder="Take a nap!"
          className="note__description"
        />
        <span className="note__delete">X</span>
      </li>
    );
}

export default Note;