import React, { useState } from "react";
import FriendService from "../services/FriendService";
import "./FriendList.css";

const FriendList = () => {
  const [friends, setFriends] = useState(FriendService.getFriends());
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  const addFriend = () => {
    if (name.trim() === "") return;
    const newFriend = { id: Date.now(), name };
    setFriends([...friends, newFriend]);
    setName("");
  };

  const removeFriend = (id) => {
    setFriends(friends.filter(friend => friend.id !== id));
  };

  const startEditing = (id, currentName) => {
    setEditingId(id);
    setEditedName(currentName);
  };

  const saveEdit = (id) => {
    setFriends(
      friends.map(friend =>
        friend.id === id ? { ...friend, name: editedName } : friend
      )
    );
    setEditingId(null);
  };

  return (
    <div className="friend-list">
      <h2>Friends</h2>
      <input 
        type="text" 
        placeholder="Enter friend’s name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addFriend}>Add Friend</button>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            {editingId === friend.id ? (
              <>
                <input 
                  type="text" 
                  value={editedName} 
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <button onClick={() => saveEdit(friend.id)}>Save</button>
              </>
            ) : (
              <>
                {friend.name} 
                <button onClick={() => startEditing(friend.id, friend.name)}>Modify</button>
                <button onClick={() => removeFriend(friend.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;