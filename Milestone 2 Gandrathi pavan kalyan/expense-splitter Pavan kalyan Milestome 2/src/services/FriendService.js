const FriendService = {
    getFriends: () => {
      return JSON.parse(localStorage.getItem("friends")) || [];
    },
  
    addFriend: (name) => {
      let friends = FriendService.getFriends();
      const newFriend = { id: Date.now(), name };
      friends.push(newFriend);
      localStorage.setItem("friends", JSON.stringify(friends));
      return friends;
    },
  
    removeFriend: (id) => {
      let friends = FriendService.getFriends();
      friends = friends.filter(friend => friend.id !== id);
      localStorage.setItem("friends", JSON.stringify(friends));
      return friends;
    }
  };
  
  export default FriendService;