import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  function handleChangeInput(e) {
    setText(e.target.value);
  }

  function handleAddNote() {
    if (text.trim()) {
      setText("");
      dispatch({
        type: "ADD_NOTE",
        text,
      });
    }
  }

  return (
    <>
      <input value={text} onChange={handleChangeInput} />
      <button onClick={handleAddNote}>Add Note</button>
    </>
  );
}
