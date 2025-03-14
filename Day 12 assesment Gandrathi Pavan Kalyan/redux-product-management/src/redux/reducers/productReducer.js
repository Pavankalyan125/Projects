const initialState = {
    products: [], // Ensure it starts as an empty array
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCTS_SUCCESS":
        return { ...state, products: action.payload };
  
      default:
        return state;
    }
  };
  
  export default productReducer;