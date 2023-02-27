import { TAGS } from '../../common/helpers/constants';

export const CONSTANTS = {
  popupBody: {
    tag: TAGS.div,
    classList: 'popup__body-confirmation',
  },
  title: {
    ru: 'Удалить завод',
    en: 'Remove factory',
  },
  popupTextEl: {
    tag: TAGS.p,
    classList: 'popup__text',
  },
  popupText: {
    ru: 'Вы уверены что хотите удалить этот завод? Все улучшения будут потеряны.',
    en: 'Are you sure you want to delete this factory? All upgrades will be lost.',
  },
  confirmBtn: {
    tag: TAGS.button,
    classList: ['buttons', 'button__confirm'],
  },
  confirmBtnText: {
    ru: 'Удалить',
    en: 'Remove',
  },
  popupElRemoved: {
    tag: TAGS.p,
    classList: 'popup__el-removed',
  },
  popupElRemovedText: {
    ru: 'Завод удален',
    en: 'Factory removed',
  },
};
