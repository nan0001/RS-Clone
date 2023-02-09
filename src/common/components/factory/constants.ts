import { TAGS } from '../../helpers/constants';

export const CONSTANTS = {
  factory: {
    tag: TAGS.div,
    classList: 'factory',
  },
  factoryImg: {
    tag: TAGS.div,
    classList: 'factory__img',
  },
  factoryTextContainer: {
    tag: TAGS.div,
    classList: 'factory__text-container',
  },
  factoryTitle: {
    tag: TAGS.h3,
    classList: 'factory__title',
  },
  description: {
    tag: TAGS.p,
    classList: 'factory__description',
  },
  upgradeText: {
    tag: TAGS.p,
    classList: 'factory__upgrade',
    text: 'Next upgrade will increase production to ',
  },
  upgradeTextRU: 'Следующее повышение уровня увеличит производство до ',
  btnsContainer: {
    tag: TAGS.div,
    classList: 'factory__buttons',
  },
  factoryProduction: {
    tag: TAGS.p,
    classList: 'factory__production',
  },
  factoryRemoveBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__remove'],
  },
  factoryUpgradeBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__upgrade'],
  },
};
