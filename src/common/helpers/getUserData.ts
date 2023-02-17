import { LINKS, METHODS } from './constants';
import { UserDataReturn } from './types';

export async function getUserData(token: string): Promise<UserDataReturn> {
  const res: Response = await fetch(LINKS.userGet, {
    method: METHODS.GET,
    headers: {
      Authorization: token,
    },
  });

  const data: UserDataReturn = await res.json();

  return data;
}
