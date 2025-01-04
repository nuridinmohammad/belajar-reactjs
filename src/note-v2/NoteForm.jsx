import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContex";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  function handleAddText() {
    if (text.trim()) {
      setText("");
      dispatch({
        type: "ADD_NOTE",
        text: text.trim(),
      });
    }
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddText}>Add</button>
    </>
  );
}
