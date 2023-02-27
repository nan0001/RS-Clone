import { TAGS } from '../../common/helpers/constants';

export const CONSTANTS = {
  gameItem: {
    tag: TAGS.div,
    classList: 'game-field__item',
  },
  cost: {
    tag: TAGS.div,
    classList: 'hide',
  },
  image: {
    tag: TAGS.img,
    classList: 'game-field__item-image',
    attributes: {
      draggable: 'false',
    },
  },
};
