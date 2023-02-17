import { enterGame } from '../../common/components/store/reducers/gameEnter';
import { setToken } from '../../common/components/store/reducers/token';
import { changeView } from '../../common/components/store/reducers/view';
import store from '../../common/components/store/store';
import { LANG, LOGIN_MESSAGES, VIEW } from '../../common/helpers/constants';
import { loginUser } from '../../common/helpers/loginUser';
import { postUserData } from '../../common/helpers/postUserData';
import { registerUser } from '../../common/helpers/registerUser';
import { resetData } from '../../common/helpers/resetData';
import {
  Credentials,
  UserLoginReturn,
  UserRegisterReturn,
} from '../../common/helpers/types';
import { updateAppData } from '../../common/helpers/updateAppData';
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

function translateLogMessage(message: string): string {
  let res = message;

  if (store.getState().lang.lang === LANG.en) {
    for (const prop in LOGIN_MESSAGES.ru) {
      if (LOGIN_MESSAGES.ru[prop] === message) {
        res = LOGIN_MESSAGES.en[prop];
      }
    }
  }

  return res;
}

async function requestLogin(
  credentials: Credentials,
  popup: HTMLElement,
  overlay: HTMLElement,
): Promise<UserLoginReturn> {
  const log: UserLoginReturn = await loginUser(credentials);

  if (log.success) {
    const token = log.data.token as string;
    //если кто-то уже был залогинен отправляем его инфу перед сменой токена
    if (store.getState().token.token) {
      await postUserData();
    }
    //а потом устанавливаем новый
    resetData();
    store.dispatch(setToken(token));
    popup.remove();
    overlay.remove();
    store.dispatch(changeView(VIEW.cookie));
    store.dispatch(enterGame(true));
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
    error.innerText = translateLogMessage(res.data.message);
  } else {
    const log: UserLoginReturn = await requestLogin(
      credentials,
      popup,
      overlay,
    );
    const token = log.data.token;

    if (token) {
      updateAppData(token); //данные подтягиваем только при логине, т.к. при регистрации нового пользователя данных не будет
    }

    error.classList.add(CONSTANTS.errorClassVisible);
    error.innerText = translateLogMessage(log.data.message);
  }
}
