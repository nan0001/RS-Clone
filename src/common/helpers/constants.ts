import card_1 from '../assets/cookies/cake(1-1).png';
import card_2 from '../assets/cookies/cake(1-6).png';
import card_3 from '../assets/cookies/cake(1-7).png';
import booster_1 from '../assets/boosters/coinX2.png';
import booster_2 from '../assets/boosters/hourglass.png';
import booster_3 from '../assets/boosters/bomb.png';

export const TAGS = {
  div: 'div',
  section: 'section',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
  span: 'span',
  button: 'button',
  input: 'input',
  img: 'img',
  ul: 'ul',
  li: 'li',
  main: 'main',
  a: 'a',
};

export const PRODUCTS = [
  {
    name: 'small cake',
    img: card_1,
    cost: 50,
    dropChance: 0.1,
  },
  {
    name: 'donut',
    img: card_2,
    cost: 30,
    dropChance: 1,
  },
  {
    name: 'cookies',
    img: card_3,
    cost: 10,
    dropChance: 1.6,
  },
];

export const LANG = {
  ru: 'ru',
  en: 'en',
};

export const VIEW = {
  cookie: 'cookie',
  factory: 'factory',
  home: 'home',
};

export const BOOSTERS = [
  {
    id: 1,
    name: 'doubleCost',
    img: booster_1,
    timer: true,
    cost: 200,
  },
  {
    id: 2,
    name: 'changeSpeed',
    img: booster_2,
    timer: true,
    cost: 100,
  },
  {
    id: 3,
    name: 'blow',
    img: booster_3,
    cost: 300,
  },
];

export const FACTORY_TYPES = {
  s: 's',
  m: 'm',
  l: 'l',
};

export const FACTORIES = {
  initLevel: 1,
  maxLevel: 10,
  upgradeMultiplier: 1.2,
  small: {
    production: 10,
    price: 500,
    upgradePrice: 300,
    title: {
      titleEN: 'Small Factory',
      titleRU: 'Маленький завод',
    },
    description: {
      descriptionEN:
        'Small Factory provides 10 cookies per second without upgrades. On the max level it can provide 50 cookies per second.',
      descriptionRU:
        'Маленький завод производит 10 печенек в секунду. На максимальном уровне производство вырастет до 50 печенек',
    },
  },
  medium: {
    production: 20,
    price: 2000,
    upgradePrice: 800,
    title: {
      titleEN: 'Medium Factory',
      titleRU: 'Завод побольше',
    },
    description: {
      descriptionEN:
        'Medium Factory provides 20 cookies per second without upgrades. On the max level it can provide 103 cookies per second.',
      descriptionRU:
        'Средний завод производит 20 печенек в секунду. На максимальном уровне производство вырастет до 103 печенек',
    },
  },
  large: {
    production: 50,
    price: 7000,
    upgradePrice: 2000,
    title: {
      titleEN: 'Large Factory',
      titleRU: 'Очень большой завод',
    },
    description: {
      descriptionEN:
        'Large Factory provides 50 cookies per second without upgrades. On the max level it can provide 258 cookies per second.',
      descriptionRU:
        'Большой завод производит 50 печенек в секунду. На максимальном уровне производство вырастет до 258 печенек',
    },
  },
};

export const COOKIES_SPEED = {
  high: 4000,
  low: 8000,
};
