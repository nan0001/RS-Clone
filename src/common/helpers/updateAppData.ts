import LargeFactory from '../../components/largeFactory/LargeFactory';
import MediumFactory from '../../components/mediumFactory/MediumFactory';
import SmallFactory from '../../components/smallFactory/SmallFactory';
import {
  setBlowCount,
  setChangeSpeedCount,
  setDoubleCostCount,
} from '../components/store/reducers/boostersCount';
import { setCookiesCount } from '../components/store/reducers/cookiesCount';
import { setFactory } from '../components/store/reducers/factories';
import store from '../components/store/store';
import { FACTORY_TYPES } from './constants';
import { getUserData } from './getUserData';
import { saveFactoryFromData } from './saveFactoryFromData';

export async function updateAppData(token: string): Promise<void> {
  const res = await getUserData(token);
  const data = res.data;
  const timePassed = res.timeHasPassed;
  let cookiesCount = data.cookiesCount;
  const smallFactory = data.factories.factoryS.bought
    ? new SmallFactory()
    : undefined;
  const mediumFactory = data.factories.factoryS.bought
    ? new MediumFactory()
    : undefined;
  const largeFactory = data.factories.factoryS.bought
    ? new LargeFactory()
    : undefined;

  store.dispatch(setDoubleCostCount(data.boosters.doubleCost));
  store.dispatch(setChangeSpeedCount(data.boosters.changeSpeed));
  store.dispatch(setBlowCount(data.boosters.blow));

  store.dispatch(
    setFactory({
      type: FACTORY_TYPES.s,
      bought: data.factories.factoryS.bought,
      level: data.factories.factoryS.level,
    }),
  );
  store.dispatch(
    setFactory({
      type: FACTORY_TYPES.m,
      bought: data.factories.factoryM.bought,
      level: data.factories.factoryM.level,
    }),
  );
  store.dispatch(
    setFactory({
      type: FACTORY_TYPES.l,
      bought: data.factories.factoryL.bought,
      level: data.factories.factoryL.level,
    }),
  );

  cookiesCount +=
    saveFactoryFromData(smallFactory, data, timePassed) +
    saveFactoryFromData(mediumFactory, data, timePassed) +
    saveFactoryFromData(largeFactory, data, timePassed);

  store.dispatch(setCookiesCount(cookiesCount));
}
