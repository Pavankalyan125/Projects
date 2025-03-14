const NoteItem = ({ note, onDelete, onEdit }) => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <p className="text-lg">{note.text}</p>
        <p className="text-sm text-gray-500">{note.time}</p>
        <div className="flex justify-end space-x-2 mt-2">
          <button onClick={() => onEdit(note)} className="px-3 py-1 bg-yellow-500 text-white rounded-md">Edit</button>
          <button onClick={() => onDelete(note.id)} className="px-3 py-1 bg-red-500 text-white rounded-md">Delete</button>
        </div>
      </div>
    );
  };