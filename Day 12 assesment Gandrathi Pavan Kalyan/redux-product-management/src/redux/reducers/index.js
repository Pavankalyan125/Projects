import { combineReducers } from "redux";
import productReducer from "./productReducer"; // Ensure file exists

const rootReducer = combineReducers({
  product: productReducer, // Ensure key name matches useSelector
});

export default rootReducer;