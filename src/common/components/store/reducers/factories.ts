import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FACTORY_TYPES } from '../../../helpers/constants';

const initialState = {
  factoryS: {
    bought: false,
    level: 1,
  },
  factoryM: {
    bought: false,
    level: 1,
  },
  factoryL: {
    bought: false,
    level: 1,
  },
};

const factories = createSlice({
  name: 'factories',
  initialState,
  reducers: {
    buyFactory(state, action: PayloadAction<string>): void {
      switch (action.payload) {
        case FACTORY_TYPES.s:
          state.factoryS.bought = true;
          break;
        case FACTORY_TYPES.m:
          state.factoryM.bought = true;
          break;
        case FACTORY_TYPES.l:
          state.factoryL.bought = true;
          break;
      }
    },
    removeFactory(state, action: PayloadAction<string>): void {
      switch (action.payload) {
        case FACTORY_TYPES.s:
          state.factoryS.bought = false;
          state.factoryS.level = 1;
          break;
        case FACTORY_TYPES.m:
          state.factoryM.bought = false;
          state.factoryM.level = 1;
          break;
        case FACTORY_TYPES.l:
          state.factoryL.bought = false;
          state.factoryL.level = 1;
          break;
      }
    },
    upgradeFactory(state, action: PayloadAction<string>): void {
      switch (action.payload) {
        case FACTORY_TYPES.s:
          state.factoryS.level += 1;
          break;
        case FACTORY_TYPES.m:
          state.factoryM.level += 1;
          break;
        case FACTORY_TYPES.l:
          state.factoryL.level += 1;
          break;
      }
    },
  },
});

export const { buyFactory, removeFactory, upgradeFactory } = factories.actions;

export default factories.reducer;
