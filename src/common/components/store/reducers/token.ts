import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Token = {
  token: undefined | string;
};

const initialState: Token = {
  token: undefined,
};

const token = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>): void {
      state.token = action.payload;
    },
  },
});

export const { setToken } = token.actions;

export default token.reducer;
