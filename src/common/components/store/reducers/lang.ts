import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LANG } from '../../../helpers/constants';

const initialState = {
  lang: LANG.en, //TODO: потом менять чтобы оно бралось с сервера
};

const lang = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang(state, action: PayloadAction<string>): void {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = lang.actions;

export default lang.reducer;
