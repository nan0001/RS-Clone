import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VIEW } from '../../../helpers/constants';

const initialState = {
  view: VIEW.home,
};

const view = createSlice({
  name: 'view',
  initialState,
  reducers: {
    changeView(state, action: PayloadAction<string>): void {
      state.view = action.payload;
    },
  },
});

export const { changeView } = view.actions;

export default view.reducer;
