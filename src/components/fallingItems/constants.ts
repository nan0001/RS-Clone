import { TAGS } from '../../common/helpers/constants';

export const CONSTANTS = {
  gameItem: {
    tag: TAGS.div,
    classList: 'game-field__item',
    id: `${Date.now()}`,
  },
  cost: {
    tag: TAGS.div,
    classList: 'hide',
  },
  image: {
    tag: TAGS.img,
    classList: 'game-field__item-image',
  },
  speed: 8000,
  idAnime: 0,
  progress: 0,
  doubleCost: false,
};
