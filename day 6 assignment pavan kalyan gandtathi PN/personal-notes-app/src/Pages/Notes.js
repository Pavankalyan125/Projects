import React from "react";
import AddNote from "../Components/AddNote";
import NoteList from "../Components/NoteList";

const Notes = () => (
  <div>
    <h1>My Notes</h1>
    <AddNote />
    <NoteList />
  </div>
);

export default Notes;