import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note({ note }) {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useContext(NotesDispatchContext);
  let component;

  function handleDoneChange(e) {
    dispatch({
      ...note,
      type: "UPDATE_NOTE",
      id: note.id,
      done: e.target.checked,
    });
  }

  function handleDeleteNote() {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  function handleTextChange(e) {
    if (note.text.trim()) {
      dispatch({
        ...note,
        type: "UPDATE_NOTE",
        id: note.id,
        text: e.target.value,
      });
    }
  }

  if (isEdit) {
    component = (
      <>
        <input value={note.text} onChange={handleTextChange} />
        <button onClick={() => setIsEdit(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        <span style={{ textDecoration: `${note.done ? "line-through" : ""}` }}>
          {note.text}
        </span>{" "}
        - <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    );
  }

  return (
    <div>
      <input type="checkbox" checked={note.done} onChange={handleDoneChange} />
      {component} | <button onClick={handleDeleteNote}>Delete</button>
    </div>
  );
}
