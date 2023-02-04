import { products } from '../../common/assets/data/products';
import createElement from '../../common/helpers/createElement';
import { randomNumber } from '../../common/helpers/generateRandomNumber';
import './fallingItem.scss';
import { CONSTANTS } from './constants';

class FallingItem {
  static draw(board: HTMLElement) {
    const fallingItem = createElement(CONSTANTS.gameItem);
    const item = this.getRandomItem(products);
    const cost = createElement(CONSTANTS.cost);
    const image = createElement(CONSTANTS.image);

    if (item) {
      image.setAttribute('src', item.img);
      cost.textContent = `${item.cost}`;
    }
    fallingItem.append(image, cost);
    fallingItem.style.left = `${this.generatePosition(board)}px`;
    board.append(fallingItem);

    fallingItem.onanimationend = () => {
      fallingItem.remove();
    };

    image.onclick = () => {
      image.classList.add('hide');
      cost.classList.remove('hide');
      cost.classList.add('game-field__item-cost');
      setTimeout(() => {
        fallingItem.remove();
      }, 1000);
    };
  }

  static getRandomItem(
    items: { name: string; img: string; cost: number; dropChance: number }[],
  ) {
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
  }

  static generatePosition(board: HTMLElement) {
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
  }
}

export default FallingItem;
