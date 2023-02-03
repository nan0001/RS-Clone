import { TAGS } from '../../../common/helpers/constants';

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
      src: './src/common/assets/cookie_bg.png',
    },
  },
  registerBtn: {
    tag: TAGS.button,
    classList: 'entrance__register',
    text: 'Register',
  },
};
