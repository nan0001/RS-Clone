import { removeFactory } from '../components/store/reducers/factories';
import store from '../components/store/store';
import { FACTORY_TYPES } from './constants';

export function stopOldFactories(): void {
  const oldFactoryS = store.getState().factories.factoryS.factory;
  const oldFactoryM = store.getState().factories.factoryM.factory;
  const oldFactoryL = store.getState().factories.factoryL.factory;

  //если был уже запущен завод, то его останавливаем
  if (oldFactoryS) {
    oldFactoryS.stopProduction();
    store.dispatch(removeFactory(FACTORY_TYPES.s));
  }

  if (oldFactoryM) {
    oldFactoryM.stopProduction();
    store.dispatch(removeFactory(FACTORY_TYPES.m));
  }

  if (oldFactoryL) {
    oldFactoryL.stopProduction();
    store.dispatch(removeFactory(FACTORY_TYPES.l));
  }
}
