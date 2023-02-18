import { resetBoosters } from '../components/store/reducers/boostersCount';
import { setCookiesCount } from '../components/store/reducers/cookiesCount';
import { setToken } from '../components/store/reducers/token';
import store from '../components/store/store';
import { stopOldFactories } from './stopOldFactories';

export function resetData(): void {
  const initState = {
    cookies: 0,
    boosters: 3,
  };

  stopOldFactories();
  store.dispatch(setCookiesCount(initState.cookies));
  store.dispatch(resetBoosters(initState.boosters));
  store.dispatch(setToken(undefined));
}
