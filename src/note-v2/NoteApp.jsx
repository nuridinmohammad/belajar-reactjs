import { useImmerReducer } from "use-immer";
import { NotesContext, NotesDispatchContext } from "./NoteContex";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;

const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn React", done: false },
];

function noteReducer(notes, action) {
  if (action.type === "ADD_NOTE") {
    notes.push({ id: id++, text: action.text, done: false });
  } else if (action.type === "UPDATE_NOTE") {
    const index = notes.findIndex((item) => item.id === action.id);
    notes[index].text = action.text;
    notes[index].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((item) => item.id === action.id);
    notes.splice(index, 1);
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(noteReducer, initialNotes);

  return (
    <div>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Note Application</h1>
          <NoteForm />
          <NoteList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}
