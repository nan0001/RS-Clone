import { LINKS, METHODS, SUCCESS_REQUESTS } from './constants';
import { Credentials, RegisterData, UserRegisterReturn } from './types';

export async function registerUser(
  credentials: Credentials,
): Promise<UserRegisterReturn> {
  const res: Response = await fetch(LINKS.register, {
    method: METHODS.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data: RegisterData = await res.json();

  if (SUCCESS_REQUESTS.includes(res.status)) {
    return { success: true, data: data };
  } else {
    return { success: false, data: data };
  }
}
