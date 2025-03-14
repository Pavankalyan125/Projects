import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  product: productReducer, // Ensure "product" matches the useSelector path
});

export default rootReducer;