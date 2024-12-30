import { useState } from "react";

export function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");

  function handleAddNote() {
    if (text.length > 0) {
      setText("");
      onAddNote(text);
    }
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Input note"
      />
      <button type="button" onClick={handleAddNote}>
        Add
      </button>
    </>
  );
}
