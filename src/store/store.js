import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./index";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
    
  },

});

export default store;



