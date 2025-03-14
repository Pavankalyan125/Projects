const initialState = {
  products: [],
  wishlist: [], // 👈 Ensure this is always an array
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;