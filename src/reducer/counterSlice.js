import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value1: 0,
    value2: 0,
  },
  reducers: {
    increment: (state, action) => {
      state[`value${action.payload}`] += 1;
    },
    decrement: (state, action) => {
      state[`value${action.payload}`] -= 1;
    },
    incrementByAmount: (state, action) => {
      state[`value${action.payload.id}`] += action.payload.value;
    },
  },
});

export const { increment, decrement, incrementByAmount } = slice.actions;

export const incrementAsyncAmount = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount({ id: 2, value: amount }));
  }, 1000);
};

export const selectCount = (state) => state.counter;

export default slice.reducer;
