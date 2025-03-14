import React, { useState, useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const AddNote = () => {
    const { addNote } = useContext(NotesContext);
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;
        addNote({ id: Date.now(), text });
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a note..."
            />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default AddNote;