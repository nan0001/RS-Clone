import { randomNumber } from '../../common/helpers/generateRandomNumber';

export const getRandomItem = (
  items: { name: string; img: string; cost: number; dropChance: number }[],
) => {
  const lerp = (min: number, max: number, value: number) =>
    (1 - value) * min + value * max;
  const total = items.reduce(
    (accumulator, item) => accumulator + item.dropChance,
    0,
  );
  const chance = lerp(0, total, Math.random());
  let current = 0;

  for (const item of items) {
    if (current <= chance && chance < current + item.dropChance) {
      return item;
    }
    current += item.dropChance;
  }
};

export const generatePosition = (board: HTMLElement) => {
  const boardWidth = board.getBoundingClientRect().width;
  const itemWidth = 100;
  const innacuracy = 30;
  const positions = Array.from(
    document.querySelectorAll('.game-field__item'),
  ).map((e) => {
    return [
      +e.getBoundingClientRect().x - (itemWidth + innacuracy),
      +e.getBoundingClientRect().x + (itemWidth + innacuracy),
      +e.getBoundingClientRect().y,
    ];
  });
  let x = randomNumber(0, boardWidth - itemWidth);
  let counter = 5;

  while (positions.some((e) => e[0] < x && e[1] > x && e[2] < itemWidth)) {
    counter--;
    if (counter < 0) {
      x = -itemWidth * 2;
      break;
    }

    if (x + itemWidth < boardWidth - itemWidth) {
      x += itemWidth;
    } else {
      x -= boardWidth - itemWidth * 2;
    }
  }

  return x;
};
