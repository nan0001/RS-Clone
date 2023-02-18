import store from '../components/store/store';
import { postUserData } from '../helpers/postUserData';

export async function beforeUnloadHandler(): Promise<void> {
  if (store.getState().token.token) {
    await postUserData();
  }
}
