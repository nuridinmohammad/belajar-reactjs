import { useState } from "react";

export function Note({ note, onDeleteNote, onDoneNote, onUpdateNote }) {
  const [isEdit, setIsEdit] = useState(false);

  let component;

  function handleUpdateNote(e) {
    onUpdateNote(e.target.value, note.id);
  }

  if (isEdit) {
    component = (
      <>
        <input
          value={note.name}
          placeholder="Input note"
          onChange={handleUpdateNote}
        />
        <button onClick={() => setIsEdit(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        <p style={{ textDecoration: `${note.isDone ? "line-through" : ""}` }}>
          {note.name}
        </p>
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "6px",
      }}
    >
      <input
        type="checkbox"
        checked={note.isDone}
        onChange={() => onDoneNote(note.id)}
      />
      {component}
      <button onClick={() => onDeleteNote(note.id)}>Delete</button>
    </div>
  );
}
