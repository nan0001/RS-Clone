import { TAGS } from '../../common/helpers/constants';
import info from '../../common/assets/boosters/info-1.png';
import plus from '../../common/assets/boosters/plus-2.png';

export const CONSTANTS = {
  booster: {
    tag: TAGS.div,
    classList: 'boosters-item',
  },
  infoWrapper: {
    classList: 'boosters-item__info',
    tag: TAGS.div,
  },
  generalInfo: {
    tag: TAGS.img,
    classList: 'boosters-item__info-general',
    attributes: {
      src: info,
    },
  },
  addBtn: {
    tag: TAGS.img,
    classList: 'boosters-item__info-buy',
    attributes: {
      src: plus,
    },
  },
  boosterWrapper: {
    classList: 'boosters-item__wrapper',
    tag: TAGS.div,
  },
  image: {
    tag: TAGS.img,
    classList: 'boosters-item__image',
    attributes: {
      draggable: 'false',
    },
  },
  timer: {
    tag: TAGS.div,
    classList: 'boosters-item__timer',
  },
  count: {
    tag: TAGS.div,
    classList: 'boosters-item__count',
  },
  description: {
    tag: TAGS.div,
    classList: 'boosters-item__description',
  },
  innerText: {
    ru: {
      blow: 'Взрывает все печеньки на поле',
      doubleCost: 'Удваивает стоимость печенек на 10 сек',
      changeSpeed: 'Снижает скорость в 2 раза на 10 сек',
      costInfo: 'Вы можете купить бустер за ',
      costInfo2: 'Не достаточно средств, цена бустера ',
      buyInfo: 'Вы можете купить этот бустер, нажав на + ',
    },
    en: {
      blow: 'Explodes all the cookies on the field',
      doubleCost: 'Doubles the cost of cookies for 10 seconds',
      changeSpeed: 'Halves the speed for 10 seconds',
      costInfo: 'You can buy this booster for ',
      costInfo2: 'Not enough money, booster costs ',
      buyInfo: 'You can buy this booster  by clicking on +',
    },
  },
};
