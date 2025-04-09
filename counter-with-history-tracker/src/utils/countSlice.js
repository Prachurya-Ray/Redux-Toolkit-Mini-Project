import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {
    history: [0],
  },
  reducers: {
    addCount: (state, action) => {
      state.history.push(action.payload);
    },
    // clearCart: (state) => {
    //   state.history = [0];
    // },
  },
});

export const {addCount, clearCart} = countSlice.actions;
export default countSlice.reducer;
