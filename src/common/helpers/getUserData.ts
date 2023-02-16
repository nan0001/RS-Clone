import store from '../components/store/store';
import { LINKS, METHODS } from './constants';
import { UserData } from './types';

export async function getUserData(): Promise<void | UserData> {
  const res: Response = await fetch(LINKS.userGet, {
    method: METHODS.GET,
    headers: {
      Authorization: store.getState().token.token as string,
    },
  });

  const data = await res.json();

  return data.data;
}
