import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  enter: false,
};

const enter = createSlice({
  name: 'enter',
  initialState,
  reducers: {
    enterGame(state, action: PayloadAction<boolean>): void {
      state.enter = action.payload;
    },
  },
});

export const { enterGame } = enter.actions;

export default enter.reducer;
