import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    // cart
    // getAllProductsCart: (state, action) => {
    //   state.cart.allCart = action.payload;
    // },
    addProductCart: (state, action) => {
      state.value.push(action.payload);
    },
    deleteProductCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addProductCart, deleteProductCart } = cartSlice.actions;

export default cartSlice.reducer;
