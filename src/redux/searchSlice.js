import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    addSearchStore: (state, action) => {
      state.value = action.payload;
    },
    deleteSearchStore: (state) => {
      state.value = "";
    },
  },
});
export const { addSearchStore, deleteSearchStore } = searchSlice.actions;

export default searchSlice.reducer;
