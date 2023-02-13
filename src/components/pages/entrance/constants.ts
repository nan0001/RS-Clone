import { TAGS } from '../../../common/helpers/constants';
import cookieBg from '../../../common/assets/images/cookie_bg.png';

export const CONSTANTS = {
  entrance: {
    tag: TAGS.section,
    classList: 'entrance',
  },
  entranceMenu: {
    tag: TAGS.div,
    classList: 'entrance__menu',
  },
  entranceTitle: {
    tag: TAGS.h1,
    classList: 'entrance__title',
    text: 'Cookie Rain',
  },
  entranceBgImg: {
    tag: TAGS.img,
    classList: 'entrance__image',
    attributes: {
      src: cookieBg,
    },
  },
  btnContainer: {
    tag: TAGS.div,
    classList: 'entrance__buttons',
  },
  registerBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__register'],
    text: 'Register',
  },
  signInBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__sign-in'],
    text: 'Sign in',
  },
  guestBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__guest'],
    text: 'Enter as a guest',
  },
  aboutBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__about'],
    text: 'Our team',
  },
  registerBtnRU: 'Регистрация',
  guestBtnRU: 'Войти как гость',
  signInBtnRU: 'Вход',
  aboutBtnRU: 'Наша команда',
};
