import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  count: 0, //TODO: потом менять чтобы оно бралось с сервера
};

const cookiesCount = createSlice({
  name: 'cookiesCount',
  initialState,
  reducers: {
    increaseCookiesCount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decreaseCookiesCount(state, action: PayloadAction<number>) {
      state.count - action.payload < 0
        ? (state.count = 0)
        : (state.count -= action.payload);
    },
  },
});

export const { increaseCookiesCount, decreaseCookiesCount } =
  cookiesCount.actions;

export default cookiesCount.reducer;
