
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cartProductIds: [],
    quantity: 1,
    total: 0,
   
  },
  reducers:{
    addToCart:(state, action)=>{
          state.cartProductIds = [ ...state.cartProductIds, action.payload];
          state.total= state.total + action.payload.name;
    },
    removFromcard: (state, action)=>{
      const indexOfId = state.cartProductIds.indexOf(action.payload);
      state.cartProductIds.splice(indexOfId, 1);

    },
    allCardClear : (state) =>{
      state.cartProductIds = [];
      state.total = 0;
    },

  }

});

export default cartSlice;

