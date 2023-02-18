import { LINKS, METHODS, SUCCESS_REQUESTS } from './constants';
import { Credentials, LoginData, UserLoginReturn } from './types';

export async function loginUser(
  credentials: Credentials,
): Promise<UserLoginReturn | void> {
  try {
    const res: Response = await fetch(LINKS.login, {
      method: METHODS.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data: LoginData = await res.json();

    if (SUCCESS_REQUESTS.includes(res.status)) {
      return { success: true, data: data };
    } else {
      return { success: false, data: data };
    }
  } catch (e) {
    console.log(e);
  }
}
