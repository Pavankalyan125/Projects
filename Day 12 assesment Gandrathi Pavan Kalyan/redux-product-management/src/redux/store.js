import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk"; 

import productReducer from "./reducers/productReducer";
import wishlistReducer from "./reducers/wishlistReducer";

const rootReducer = combineReducers({
    products: productReducer,
    wishlist: wishlistReducer,
});

// ✅ Use Redux's built-in compose function for DevTools support
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;