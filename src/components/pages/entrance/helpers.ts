import { enterGame } from '../../../common/components/store/reducers/gameEnter';
import { changeView } from '../../../common/components/store/reducers/view';
import store, { RootState } from '../../../common/components/store/store';
import { LANG, VIEW } from '../../../common/helpers/constants';
import { postUserData } from '../../../common/helpers/postUserData';
import { resetData } from '../../../common/helpers/resetData';
import { CONSTANTS } from './constants';

export function changeLanguage(
  state: RootState,
  btns: {
    registerBtn: HTMLElement;
    guestBtn: HTMLElement;
    aboutBtn: HTMLElement;
    signInBtn: HTMLElement;
    continueBtn: HTMLElement;
  },
): void {
  if (state.lang.lang === LANG.ru) {
    btns.registerBtn.innerText = CONSTANTS.registerBtnRU;
    btns.signInBtn.innerText = CONSTANTS.signInBtnRU;
    btns.guestBtn.innerText = CONSTANTS.guestBtnRU;
    btns.aboutBtn.innerText = CONSTANTS.aboutBtnRU;
    btns.continueBtn.innerText = CONSTANTS.continueBtnRU;
  } else {
    btns.registerBtn.innerText = CONSTANTS.registerBtn.text;
    btns.signInBtn.innerText = CONSTANTS.signInBtn.text;
    btns.guestBtn.innerText = CONSTANTS.guestBtn.text;
    btns.aboutBtn.innerText = CONSTANTS.aboutBtn.text;
    btns.continueBtn.innerText = CONSTANTS.continueBtn.text;
  }
}

export async function guestBtnHandler(): Promise<void> {
  if (store.getState().token.token) {
    await postUserData();
  }

  resetData();
  store.dispatch(changeView(VIEW.cookie));
  store.dispatch(enterGame(true));
}
