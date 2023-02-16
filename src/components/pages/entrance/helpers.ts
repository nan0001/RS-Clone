import { RootState } from '../../../common/components/store/store';
import { LANG } from '../../../common/helpers/constants';
import { CONSTANTS } from './constants';

export function changeLanguage(
  state: RootState,
  btns: {
    registerBtn: HTMLElement;
    guestBtn: HTMLElement;
    aboutBtn: HTMLElement;
    signInBtn: HTMLElement;
  },
): void {
  if (state.lang.lang === LANG.ru) {
    btns.registerBtn.innerText = CONSTANTS.registerBtnRU;
    btns.signInBtn.innerText = CONSTANTS.signInBtnRU;
    btns.guestBtn.innerText = CONSTANTS.guestBtnRU;
    btns.aboutBtn.innerText = CONSTANTS.aboutBtnRU;
  } else {
    btns.registerBtn.innerText = CONSTANTS.registerBtn.text;
    btns.signInBtn.innerText = CONSTANTS.signInBtn.text;
    btns.guestBtn.innerText = CONSTANTS.guestBtn.text;
    btns.aboutBtn.innerText = CONSTANTS.aboutBtn.text;
  }
}
