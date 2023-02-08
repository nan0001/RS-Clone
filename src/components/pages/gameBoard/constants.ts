import { TAGS } from '../../../common/helpers/constants';

export const CONSTANTS = {
  gameWrapper: {
    tag: TAGS.section,
    classList: 'wrapper-game',
  },
  gameBoard: {
    tag: TAGS.div,
    classList: 'game',
  },
  gameControls: {
    tag: TAGS.div,
    classList: 'game-controls',
  },
  gameField: {
    tag: TAGS.div,
    classList: 'game-field',
  },
  returnBtn: {
    tag: TAGS.button,
    classList: ['button', 'game-controls__button'],
    text: 'Return',
  },
  boosters: {
    tag: TAGS.div,
    classList: 'game-boosters',
  },
  totalCost: {
    tag: TAGS.div,
    classList: 'game-field__total-cost',
  },
};
