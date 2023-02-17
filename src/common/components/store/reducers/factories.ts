import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import LargeFactory from '../../../../components/largeFactory/LargeFactory';
import MediumFactory from '../../../../components/mediumFactory/MediumFactory';
import SmallFactory from '../../../../components/smallFactory/SmallFactory';
import { FACTORY_TYPES } from '../../../helpers/constants';
import { FactoryUpdate } from '../../../helpers/types';
import Factory from '../../factory/Factory';

type FactoriesState = {
  factoryS: {
    bought: boolean;
    level: number;
    factory: SmallFactory | undefined;
  };
  factoryM: {
    bought: boolean;
    level: number;
    factory: MediumFactory | undefined;
  };
  factoryL: {
    bought: boolean;
    level: number;
    factory: LargeFactory | undefined;
  };
};

const initialState: FactoriesState = {
  factoryS: {
    bought: false,
    level: 1,
    factory: undefined,
  },
  factoryM: {
    bought: false,
    level: 1,
    factory: undefined,
  },
  factoryL: {
    bought: false,
    level: 1,
    factory: undefined,
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
    saveFactory(
      state,
      action: PayloadAction<
        SmallFactory | MediumFactory | LargeFactory | Factory
      >,
    ): void {
      if (action.payload instanceof SmallFactory) {
        state.factoryS.factory = action.payload;
      }
      if (action.payload instanceof MediumFactory) {
        state.factoryM.factory = action.payload;
      }
      if (action.payload instanceof LargeFactory) {
        state.factoryL.factory = action.payload;
      }
    },
    removeFactory(state, action: PayloadAction<string>): void {
      switch (action.payload) {
        case FACTORY_TYPES.s:
          state.factoryS.bought = false;
          state.factoryS.level = 1;
          state.factoryS.factory = undefined;
          break;
        case FACTORY_TYPES.m:
          state.factoryM.bought = false;
          state.factoryM.level = 1;
          state.factoryM.factory = undefined;
          break;
        case FACTORY_TYPES.l:
          state.factoryL.bought = false;
          state.factoryL.level = 1;
          state.factoryL.factory = undefined;
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
    setFactory(state, action: PayloadAction<FactoryUpdate>): void {
      switch (action.payload.type) {
        case FACTORY_TYPES.s:
          state.factoryS.bought = action.payload.bought;
          state.factoryS.level = action.payload.level;
          break;
        case FACTORY_TYPES.m:
          state.factoryM.bought = action.payload.bought;
          state.factoryM.level = action.payload.level;
          break;
        case FACTORY_TYPES.l:
          state.factoryL.bought = action.payload.bought;
          state.factoryL.level = action.payload.level;
          break;
      }
    },
  },
});

export const {
  buyFactory,
  removeFactory,
  upgradeFactory,
  saveFactory,
  setFactory,
} = factories.actions;

export default factories.reducer;
