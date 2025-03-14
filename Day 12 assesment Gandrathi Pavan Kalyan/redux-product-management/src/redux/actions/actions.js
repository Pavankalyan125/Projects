export const removeFromWishlist = (product) => {
    return {
      type: "REMOVE_FROM_WISHLIST",
      payload: product,
    };
  };