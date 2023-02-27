import { TAGS } from '../../common/helpers/constants';

export const CONSTANTS = {
  titleSign: {
    en: 'Sign in',
    ru: 'Вход',
  },
  titleReg: {
    en: 'Registration',
    ru: 'Регистрация',
  },
  registerClass: 'register',
  popupBody: {
    tag: TAGS.div,
    classList: 'popup__body-sign',
  },
  popupInputs: {
    tag: TAGS.div,
    classList: 'popup__inputs',
  },
  popupLogin: {
    tag: TAGS.input,
    classList: ['popup__input', 'input__login'],
    id: 'login',
    attributes: {
      type: 'text',
    },
  },
  popupLoginInfo: {
    tag: TAGS.p,
    classList: 'popup__login-info',
  },
  popupLoginInfoText: {
    en: 'Login must be at least of 5 characters',
    ru: 'Логин должен быть не короче 5 символов',
  },
  popupPassInfoText: {
    en: 'Password must be at least of 6 characters',
    ru: 'Пароль должен быть не короче 6 символов',
  },
  popupPassword: {
    tag: TAGS.input,
    classList: ['popup__input', 'input__pass'],
    id: 'pass',
    attributes: {
      type: 'password',
    },
  },
  loginPlaceholder: {
    en: 'Login',
    ru: 'Логин',
  },
  passwordPlaceholder: {
    en: 'Password',
    ru: 'Пароль',
  },
  enterBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__enter'],
  },
  enterBtnText: {
    en: 'Enter',
    ru: 'Войти',
  },
  registerText: {
    en: 'Register',
    ru: 'Зарегистрироваться',
  },
  minLoginLength: 5,
  minPassLength: 6,
  error: {
    tag: TAGS.p,
    classList: 'error',
  },
  errorClassVisible: 'visible',
};
