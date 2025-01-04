import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContex";

export default function Note({ note }) {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useContext(NotesDispatchContext);
  let component;

  function handleDeleteNote() {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  function handleChangeDone(e) {
    dispatch({
      ...note,
      type: "UPDATE_NOTE",
      id: note.id,
      done: e.target.checked,
    });
  }

  function handleChangeNote(e) {
    dispatch({
      ...note,
      type: "UPDATE_NOTE",
      id: note.id,
      text: e.target.value,
    });
  }

  if (isEdit) {
    component = (
      <>
        <input value={note.text} onChange={handleChangeNote} />
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
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      {component} | <button onClick={handleDeleteNote}>Delete</button>
    </div>
  );
}
