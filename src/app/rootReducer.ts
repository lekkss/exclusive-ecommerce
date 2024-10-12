import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import cartReducer from "../features/Cart/cartSlice";
import wishlistReducer from "../features/Wishlist/wishlistSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
