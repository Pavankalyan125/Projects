export const fetchProducts = () => async (dispatch) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
  
      console.log("Fetched Products:", data); // Debugging
  
      dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };