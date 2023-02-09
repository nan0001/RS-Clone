import { TAGS } from '../../helpers/constants';

export const CONSTANTS = {
  factory: {
    tag: TAGS.div,
    classList: 'factory',
  },
  additionalFactoryClass(classToAdd: string): string {
    return `factory-${classToAdd}`;
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
  },
  upgradeTextENHandler(amount: number): string {
    return `Next upgrade will increase production to ${amount} cookies`;
  },
  upgradeTextRUHandler(amount: number): string {
    return `Следующее повышение уровня увеличит производство до ${amount} печенек`;
  },
  maxUpgrade: {
    en: 'Max upgrade level reached',
    ru: 'Достигнут максимальный уровень',
  },
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
