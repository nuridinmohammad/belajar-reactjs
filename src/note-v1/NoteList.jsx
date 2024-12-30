import { Note } from "./Note";

export function NoteList({
  notes = [],
  onUpdateNote,
  onDeleteNote,
  onDoneNote,
}) {
  function handleDeleteNote(id) {
    onDeleteNote(id);
  }

  return (
    <ul>
      {notes.map((item) => (
        <li key={item.id}>
          <Note
            note={item}
            onDeleteNote={handleDeleteNote}
            onDoneNote={onDoneNote}
            onUpdateNote={onUpdateNote}
          />
        </li>
      ))}
    </ul>
  );
}
