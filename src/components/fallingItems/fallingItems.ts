import { products } from '../../common/assets/data/products';
import createElement from '../../common/helpers/createElement';
import { TAGS } from '../../common/helpers/constants';
import { randomNumber } from '../../common/helpers/generateRandomNumber';
import './fallingItem.scss';

class FallingItem {
  static gameBoard: HTMLElement;

  static draw() {
    this.gameBoard = document.querySelector('.game__field') as HTMLElement;
    const fallingItem = createElement({
      tag: TAGS.div,
      classList: 'fallingItem',
      id: `${Date.now()}`,
    });

    const item = this.getRandomItem(products);
    const cost = createElement({
      tag: TAGS.div,
      text: item ? `+${item.cost}` : '',
      classList: 'hide',
    });
    const image = new Image();
    image.src = item ? item.img : '';
    fallingItem.append(image, cost);
    fallingItem.style.left = `${this.generatePosition()}px`;
    this.gameBoard.append(fallingItem);

    fallingItem.onanimationend = () => {
      fallingItem.remove();
    };

    image.onclick = () => {
      image.classList.add('hide');
      cost.classList.remove('hide');
      cost.classList.add('cost');
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

  static generatePosition() {
    const boardWidth = this.gameBoard.getBoundingClientRect().width;
    const positions = Array.from(document.querySelectorAll('.fallingItem')).map(
      (e) => {
        return [
          +e.getBoundingClientRect().x - 130,
          +e.getBoundingClientRect().x + 130,
          +e.getBoundingClientRect().y,
        ];
      },
    );
    let x = randomNumber(0, boardWidth - 130);
    let counter = 5;
    while (positions.some((e) => e[0] < x && e[1] > x && e[2] < 100)) {
      counter--;
      if (counter < 0) {
        x = -200;
        break;
      }
      if (x + 100 < boardWidth - 100) {
        x += 100;
      } else {
        x -= boardWidth - 200;
      }
    }

    return x;
  }
}

export default FallingItem;
