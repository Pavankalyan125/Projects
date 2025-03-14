import React, { useState } from "react";
import "./styles.css"; // Import CSS

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Toggle Dark/Light Mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Handle Note Submission
  const addNote = () => {
    if (note.trim() !== "") {
      if (editIndex !== null) {
        // Editing an existing note
        const updatedNotes = [...notes];
        updatedNotes[editIndex].text = note;
        setNotes(updatedNotes);
        setEditIndex(null);
      } else {
        // Adding a new note
        setNotes([...notes, { text: note, time: new Date().toLocaleTimeString() }]);
      }
      setNote("");
    }
  };

  // Handle Note Edit
  const editNote = (index) => {
    setNote(notes[index].text);
    setEditIndex(index);
  };

  // Handle Note Deletion
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
        <h1>Personal Notes</h1>
        <div className="note-input">
          <textarea
            placeholder="Write your note here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button onClick={addNote}>{editIndex !== null ? "Update Note" : "Add Note"}</button>
        </div>
        <ul>
          {notes.length === 0 ? (
            <p>No notes saved yet.</p>
          ) : (
            notes.map((n, index) => (
              <li key={index} className="note-item">
                <span>{n.text}</span>
                <span className="note-time">{n.time}</span>
                <button className="edit-btn" onClick={() => editNote(index)}>✏ Edit</button>
                <button className="delete-btn" onClick={() => deleteNote(index)}>❌ Delete</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;