import { createSelector } from "reselect";

const selectProductState = (state) => state?.products || { items: [] };

export const selectProducts = createSelector(
  [selectProductState],
  (productsState) => productsState.items || []
);
