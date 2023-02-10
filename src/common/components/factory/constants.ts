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
  upgradeTextENHandler(amount: number, upgradeCost: number): string {
    return `Next upgrade will increase production to ${amount} cookies.\nUpgrade cost ${upgradeCost} cookies`;
  },
  upgradeTextRUHandler(amount: number, upgradeCost: number): string {
    return `Следующее повышение уровня увеличит производство до ${amount} печенек. \nСтоимость улучшения ${upgradeCost} печенек`;
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
  buyBtn: {
    tag: TAGS.button,
    classList: ['button', 'button__buy-factory'],
  },
  buyBtnText: {
    en: 'BUY',
    ru: 'КУПИТЬ',
  },
  buyBtnBoughtClass: 'bought',
  classForCatalogue: 'catalogue__factory',
  factoryPriceCont: {
    tag: TAGS.div,
    classList: 'factory__price-cont',
  },
  factoryCurrency: {
    tag: TAGS.div,
    classList: 'factory__currency',
  },
  factoryPrice: {
    tag: TAGS.p,
    classList: 'factory__price',
  },
};
