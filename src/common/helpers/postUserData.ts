import store from '../components/store/store';
import { LINKS, METHODS } from './constants';
import { UserData } from './types';

export async function postUserData(): Promise<void> {
  const dataToPost: UserData = {
    cookiesCount: store.getState().cookies.count,
    boosters: store.getState().boosters,
    factories: {
      factoryS: {
        bought: store.getState().factories.factoryS.bought,
        level: store.getState().factories.factoryS.level,
      },
      factoryM: {
        bought: store.getState().factories.factoryM.bought,
        level: store.getState().factories.factoryM.level,
      },
      factoryL: {
        bought: store.getState().factories.factoryL.bought,
        level: store.getState().factories.factoryL.level,
      },
    },
  };

  const res: Response = await fetch(LINKS.userPost, {
    method: METHODS.POST,
    headers: {
      Authorization: store.getState().token.token as string,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToPost),
  });

  const data = await res.json();

  console.log(data);
}
