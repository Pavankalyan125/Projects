const initialState = {
    notes: JSON.parse(localStorage.getItem("notes")) || [],
  };
  
  export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_NOTE":
        const updatedNotes = [...state.notes, action.payload];
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        return { ...state, notes: updatedNotes };
      
      case "DELETE_NOTE":
        const filteredNotes = state.notes.filter(note => note.id !== action.payload);
        localStorage.setItem("notes", JSON.stringify(filteredNotes));
        return { ...state, notes: filteredNotes };
      
      case "EDIT_NOTE":
        const editedNotes = state.notes.map(note =>
          note.id === action.payload.id ? action.payload : note
        );
        localStorage.setItem("notes", JSON.stringify(editedNotes));
        return { ...state, notes: editedNotes };
      
      default:
        return state;
    }
  };