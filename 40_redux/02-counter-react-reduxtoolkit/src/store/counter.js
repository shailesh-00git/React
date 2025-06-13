import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    reset: (state) => {
      state.counterVal = 0;
    },
    privacy: (state, action) => {
      console.log(state, action);
    },

    variable_addition: (state, action) => {
      state.counterVal += action.payload.value;
    },
    variable_subtraction: (state, action) => {
      state.counterVal = state.counterVal - action.payload.value;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice;
