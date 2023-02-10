import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  speed: 8000,
  doubleCost: false,
};

const fallingItems = createSlice({
  name: 'fallingItems',
  initialState,
  reducers: {
    changeSpeed(state, action: PayloadAction<number>): void {
      state.speed = Number(action.payload);
    },
    changeDoubleCost(state): void {
      state.doubleCost = !state.doubleCost;
    },
  },
});

export const { changeSpeed, changeDoubleCost } = fallingItems.actions;

export default fallingItems.reducer;
