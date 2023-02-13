import { TAGS } from '../../common/helpers/constants';
import homeView from '../../common/assets/images/home_view.png';
import cookieView from '../../common/assets/images/cookie_view.png';
import factoryView from '../../common/assets/images/factory_view.png';
import cake from '../../common/assets/cookies/cake(1-1).png';
import donut from '../../common/assets/cookies/cake(1-6).png';
import cookie from '../../common/assets/cookies/cake(1-7).png';
import x2 from '../../common/assets/boosters/coinX2.png';
import hourglass from '../../common/assets/boosters/hourglass.png';
import bomb from '../../common/assets/boosters/bomb.png';
import factoryS from '../../common/assets/images/factory_s.png';
import factoryM from '../../common/assets/images/factory_m.png';
import factoryL from '../../common/assets/images/factory_l.png';

export const CONSTANTS = {
  title: {
    en: 'How to play',
    ru: 'Как играть',
  },
  popupBody: {
    tag: TAGS.div,
    classList: 'popup__body-help',
  },
  popupCont: {
    tag: TAGS.div,
    classList: 'popup__cont',
  },
  popupInfoTitle: {
    tag: TAGS.h2,
    classList: 'popup__info-title',
  },
  popupInfoDesc: {
    tag: TAGS.p,
    classList: 'popup__desc',
  },
  popupInfoCont: {
    tag: TAGS.ul,
    classList: 'popup__info',
  },
  popupItem: {
    tag: TAGS.li,
    classList: 'popup__item',
  },
  popupItemImg: {
    tag: TAGS.div,
    classList: 'popup__img',
  },
  popupItemDesc: {
    tag: TAGS.p,
    classList: 'popup__item-desc',
  },
  popupViewTitleText: {
    en: 'View',
    ru: 'Вид',
  },
  popupViewDescText: {
    en: 'Switch between page views pressing control buttons',
    ru: 'Переключайте вид страницы с помощью кнопок управления',
  },
  popupCookiesTitleText: {
    en: 'Cookies',
    ru: 'Печеньки',
  },
  popupCookiesDescText: {
    en: 'Click on falling cookies to earn scores',
    ru: 'Кликайте по падающим печенькам, чтобы заработать баллы',
  },
  popupBoostersTitleText: {
    en: 'Boosters',
    ru: 'Усилители',
  },
  popupBoostersDescText: {
    en: 'Use boosters to collect more cookies',
    ru: 'Используйте усилители, чтобы собирать больше печенек',
  },
  popupFactoriesTitleText: {
    en: 'Factories',
    ru: 'Заводы',
  },
  popupFactoriesDescText: {
    en: 'Buy factories to product cookies and earn scores',
    ru: 'Покупайте заводы, чтобы производить печеньки и зарабатывать баллы',
  },
  viewItems: [
    {
      classList: 'img-home',
      imgSrc: homeView,
      en: 'Press this button to go to the entrance page',
      ru: 'Нажмите эту кнопку, чтобы перейти на страницу входа',
    },
    {
      classList: 'img-cookies',
      imgSrc: cookieView,
      en: 'Press this button to go to the game page',
      ru: 'Нажмите эту кнопку, чтобы перейти на страницу игры',
    },
    {
      classList: 'img-factories',
      imgSrc: factoryView,
      en: 'Press this button to go to the factories page',
      ru: 'Нажмите эту кнопку, чтобы перейти на страницу заводов',
    },
  ],
  cookieItems: [
    {
      classList: 'img-cookie',
      imgSrc: cookie,
      en: 'Catch cookies to earn 10 scores',
      ru: 'Ловите печеньки, чтобы заработать 10 баллов',
    },
    {
      classList: 'img-donut',
      imgSrc: donut,
      en: 'Catch donuts to earn 30 scores',
      ru: 'Ловите пончики, чтобы заработать 30 баллов',
    },
    {
      classList: 'img-cake',
      imgSrc: cake,
      en: 'Catch cakes to earn 50 scores',
      ru: 'Ловите тортики, чтобы заработать 50 баллов',
    },
  ],
  boostersItems: [
    {
      classList: 'img-hourglass',
      imgSrc: hourglass,
      en: 'Use hourglass booster to slow time',
      ru: 'Используйте песочные часы, чтобы замедлить время',
    },
    {
      classList: 'img-x2',
      imgSrc: x2,
      en: 'Use X2 booster to double scores for cookies',
      ru: 'Используйте усилитель X2, чтобы удвоить баллы за печеньки',
    },
    {
      classList: 'img-bomb',
      imgSrc: bomb,
      en: 'Use bomb booster to blow up all cookies on the screen',
      ru: 'Используйте бомбу, чтобы взорвать все печеньки на экране',
    },
  ],
  factoriesItems: [
    {
      classList: 'img-small',
      imgSrc: factoryS,
      en: 'Small Factory provides 10 scores per second',
      ru: 'Маленький завод приносит 10 баллов в секунду',
    },
    {
      classList: 'img-medium',
      imgSrc: factoryM,
      en: 'Medium Factory provides 20 scores per second',
      ru: 'Средний завод приносит 20 баллов в секунду',
    },
    {
      classList: 'img-large',
      imgSrc: factoryL,
      en: 'Large Factory provides 50 scores per second',
      ru: 'Большой завод приносит 50 баллов в секунду',
    },
  ],
};
