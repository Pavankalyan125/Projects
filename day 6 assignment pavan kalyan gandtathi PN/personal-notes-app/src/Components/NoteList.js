import { useState } from "react";

const NoteList = ({ notes, deleteNote, editNote }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditedText(text);
  };

  const handleSave = (id) => {
    editNote(id, editedText);
    setEditingId(null);
  };

  return (
    <ul className="note-list">
      {notes.length === 0 ? (
        <p>No notes saved yet.</p>
      ) : (
        notes.map((note) => (
          <li key={note.id} className="note">
            {editingId === note.id ? (
              <textarea value={editedText} onChange={(e) => setEditedText(e.target.value)} />
            ) : (
              <p>{note.text}</p>
            )}
            <p className="time">{note.time}</p>
            <div className="button-group">
              {editingId === note.id ? (
                <button className="edit-btn" onClick={() => handleSave(note.id)}>
                  Save
                </button>
              ) : (
                <button className="edit-btn" onClick={() => handleEdit(note.id, note.text)}>
                  Edit
                </button>
              )}
              <button className="delete-btn" onClick={() => deleteNote(note.id)}>
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default NoteList;


