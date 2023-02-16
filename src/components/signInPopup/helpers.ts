import { changeView } from '../../common/components/store/reducers/view';
import store from '../../common/components/store/store';
import { LANG, VIEW } from '../../common/helpers/constants';
import { loginUser } from '../../common/helpers/loginUser';
import { registerUser } from '../../common/helpers/registerUser';
import {
  Credentials,
  UserLoginReturn,
  UserRegisterReturn,
} from '../../common/helpers/types';
import { CONSTANTS } from './constants';

export function checkValidity(
  inp1: HTMLInputElement,
  inp2: HTMLInputElement,
  enterBtn: HTMLButtonElement,
): void {
  const minLength = inp1.classList.contains(CONSTANTS.popupLogin.classList[1])
    ? CONSTANTS.minLoginLength
    : CONSTANTS.minPassLength;

  if (!(inp1.value.length >= minLength)) {
    inp1.setAttribute('invalid', '');
  } else {
    inp1.removeAttribute('invalid');
  }

  if (!inp1.hasAttribute('invalid') && !inp2.hasAttribute('invalid')) {
    enterBtn.disabled = false;
  } else {
    enterBtn.disabled = true;
  }
}

export function insertText(
  loginInp: HTMLInputElement,
  passInp: HTMLInputElement,
  loginInfo: HTMLElement,
  passInfo: HTMLElement,
  enterBtn: HTMLButtonElement,
  register: boolean,
): void {
  if (store.getState().lang.lang === LANG.en) {
    loginInp.placeholder = CONSTANTS.loginPlaceholder.en;
    passInp.placeholder = CONSTANTS.passwordPlaceholder.en;
    loginInfo.innerText = CONSTANTS.popupLoginInfoText.en;
    passInfo.innerText = CONSTANTS.popupPassInfoText.en;

    if (!register) {
      enterBtn.innerText = CONSTANTS.enterBtnText.en;
    } else {
      enterBtn.innerText = CONSTANTS.registerText.en;
    }
  } else {
    loginInp.placeholder = CONSTANTS.loginPlaceholder.ru;
    passInp.placeholder = CONSTANTS.passwordPlaceholder.ru;
    loginInfo.innerText = CONSTANTS.popupLoginInfoText.ru;
    passInfo.innerText = CONSTANTS.popupPassInfoText.ru;

    if (!register) {
      enterBtn.innerText = CONSTANTS.enterBtnText.ru;
    } else {
      enterBtn.innerText = CONSTANTS.registerText.ru;
    }
  }
}

async function requestLogin(
  credentials: Credentials,
  popup: HTMLElement,
  overlay: HTMLElement,
): Promise<UserLoginReturn> {
  const log: UserLoginReturn = await loginUser(credentials);

  if (log.success) {
    const token = log.data.token as string;
    localStorage.setItem('token', token);
    popup.remove();
    overlay.remove();
    store.dispatch(changeView(VIEW.cookie));
  }

  return log;
}

export async function signIn(
  register: boolean,
  popup: HTMLElement,
  overlay: HTMLElement,
  login: string,
  password: string,
  error: HTMLElement,
): Promise<void> {
  const credentials: Credentials = {
    login,
    password,
  };

  if (register) {
    const res: UserRegisterReturn = await registerUser(credentials);

    if (res.success) {
      await requestLogin(credentials, popup, overlay);
    }

    error.classList.add(CONSTANTS.errorClassVisible);
    error.innerText = res.data.message;
  } else {
    const log: UserLoginReturn = await requestLogin(
      credentials,
      popup,
      overlay,
    );

    error.classList.add(CONSTANTS.errorClassVisible);
    error.innerText = log.data.message;
  }
}
