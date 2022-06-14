import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addProductCart: (state, action) => {
      state.value.push(action.payload);
    },
    deleteProductCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    deleteAllProductCart: (state) => {
      state.value.length = 0;
    },
    updateQuantityProductCart: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity < 1) {
            item.quantity = 1;
          } else {
            item.quantity = action.payload.quantity;
          }
        }
        return 0;
      });
    },
  },
});

export const {
  addProductCart,
  deleteProductCart,
  deleteAllProductCart,
  updateQuantityProductCart,
} = cartSlice.actions;

export default cartSlice.reducer;
