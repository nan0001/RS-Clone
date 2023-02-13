import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  doubleCost: 3,
  changeSpeed: 3,
  blow: 3,
};
const boostersCount = createSlice({
  name: 'boostersCount',
  initialState,
  reducers: {
    increaseBoostersCount(state, action: PayloadAction<string>): void {
      switch (action.payload) {
        case 'doubleCost':
          state.doubleCost += 1;
          break;
        case 'changeSpeed':
          state.changeSpeed += 1;
          break;
        case 'blow':
          state.blow += 1;
          break;
      }
    },
    decreaseBoostersCount(state, action: PayloadAction<string>): void {
      switch (action.payload) {
        case 'doubleCost':
          state.doubleCost -= state.doubleCost > 0 ? 1 : 0;
          break;
        case 'changeSpeed':
          state.changeSpeed -= state.changeSpeed > 0 ? 1 : 0;
          break;
        case 'blow':
          state.blow -= state.blow > 0 ? 1 : 0;
          break;
      }
    },
  },
});

export const { increaseBoostersCount, decreaseBoostersCount } =
  boostersCount.actions;

export default boostersCount.reducer;
