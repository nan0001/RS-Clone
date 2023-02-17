import LargeFactory from '../../components/largeFactory/LargeFactory';
import MediumFactory from '../../components/mediumFactory/MediumFactory';
import SmallFactory from '../../components/smallFactory/SmallFactory';
import { saveFactory } from '../components/store/reducers/factories';
import store from '../components/store/store';
import { resetFactory } from './resetFactory';
import { UserData } from './types';

export function saveFactoryFromData(
  factory: SmallFactory | MediumFactory | LargeFactory | undefined,
  data: UserData,
  timePassed: number,
): number {
  const factoryLevel =
    factory instanceof SmallFactory
      ? data.factories.factoryS.level
      : factory instanceof MediumFactory
      ? data.factories.factoryM.level
      : data.factories.factoryL.level;
  const oldFactory =
    factory instanceof SmallFactory
      ? store.getState().factories.factoryS.factory
      : factory instanceof MediumFactory
      ? store.getState().factories.factoryM.factory
      : store.getState().factories.factoryL.factory;

  if (factory) {
    resetFactory(factory, factoryLevel);
    const cookieAccum = Math.floor(factory.cookieProduction * timePassed);

    //если был уже запущен завод, то его останавливаем
    if (oldFactory) {
      oldFactory.stopProduction();
    }

    store.dispatch(saveFactory(factory));
    factory.product();

    return cookieAccum;
  }

  return 0;
}
