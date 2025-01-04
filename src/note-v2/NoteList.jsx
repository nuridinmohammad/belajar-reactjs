import { useContext } from "react";
import { NotesContext } from "./NoteContex";
import Note from "./Note";

export default function NoteList() {
  const notes = useContext(NotesContext);
  return (
    <>
      <ul>
        {notes.map((item) => (
          <Note key={item.id} note={item} />
        ))}
      </ul>
    </>
  );
}
