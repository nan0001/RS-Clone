import LargeFactory from '../../components/largeFactory/LargeFactory';
import MediumFactory from '../../components/mediumFactory/MediumFactory';
import SmallFactory from '../../components/smallFactory/SmallFactory';
import { RootState } from '../components/store/store';

export function defineFactoryState(
  factory: SmallFactory | MediumFactory | LargeFactory,
  state: RootState,
): { bought: boolean; level: number } {
  const factoryState =
    factory instanceof SmallFactory
      ? state.factories.factoryS
      : factory instanceof MediumFactory
      ? state.factories.factoryM
      : state.factories.factoryL;

  return factoryState;
}
