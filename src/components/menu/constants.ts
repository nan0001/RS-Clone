import { TAGS } from '../../common/helpers/constants';

export const CONSTANTS = {
  menu: {
    tag: TAGS.div,
    classList: 'menu',
  },
  menuBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__menu', 'menu-hidden'],
  },
  menuList: {
    tag: TAGS.ul,
    classList: 'menu__list',
  },
  menuItem: {
    tag: TAGS.li,
  },
  fullscrBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__fullscreen', 'fullscreen-off'],
  },
  soundBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__sound', 'sound-on'],
  },
  langBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__lang', 'lang-en'],
  },
  helpBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__help'],
  },
};
