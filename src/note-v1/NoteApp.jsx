import { useState } from "react";
import { NoteForm } from "./NoteForm";
import { NoteList } from "./NoteList";

let id = 0;
const initialNotes = [
  { id: id++, name: "Test 1", isDone: false },
  { id: id++, name: "Test 2", isDone: false },
  { id: id++, name: "Test 3", isDone: true },
  { id: id++, name: "Test 4", isDone: false },
];

export default function NoteApp() {
  const [notes, setNotes] = useState(initialNotes);

  function handleAddNote(note) {
    setNotes([...notes, { id: id++, name: note, isDone: false }]);
  }

  function handleUpdateNote(note, id) {
    setNotes((prevState) =>
      prevState.map((item) => (item.id === id ? { ...item, name: note } : item))
    );
  }

  function handleDeleteNote(id) {
    const findIndex = notes.findIndex((item) => item.id === id);
    const data = notes.filter((item) => item.id !== findIndex);
    setNotes(data);
  }

  function handleDoneNote(id) {
    setNotes((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  return (
    <>
      <h1>Note App v1</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onUpdateNote={handleUpdateNote}
        onDeleteNote={handleDeleteNote}
        onDoneNote={handleDoneNote}
      />
    </>
  );
}
