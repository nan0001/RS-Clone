import { TAGS } from '../../common/helpers/constants';

export const CONSTANTS = {
  booster: {
    tag: TAGS.div,
    classList: 'game-boosters__item',
  },
  image: {
    tag: TAGS.img,
    classList: 'game-boosters__item-image',
    attributes: {
      draggable: 'false',
    },
  },
  timer: {
    tag: TAGS.div,
    classList: 'game-boosters__item-timer',
  },
  count: {
    tag: TAGS.div,
    classList: 'game-boosters__item-count',
  },
  buyInfo: {
    tag: TAGS.div,
    classList: 'game-boosters__item-buy',
  },
};
