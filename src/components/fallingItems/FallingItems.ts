import createElement from '../../common/helpers/createElement';
import './fallingItem.scss';
import { CONSTANTS } from './constants';
import { PRODUCTS } from '../../common/helpers/constants';
import {
  addAnimation,
  generatePosition,
  getRandomItem,
  playSound,
  updateCurrentItems,
} from './helpers';
import store from '../../common/components/store/store';
import { increaseCookiesCount } from '../../common/components/store/reducers/cookiesCount';
import sound from '../../common/assets/sounds/blow.mp3';
import click from '../../common/assets/sounds/click.mp3';

class FallingItem {
  static prevState: number | string;

  static draw(board: HTMLElement) {
    const fallingItem = createElement(CONSTANTS.gameItem);
    const item = getRandomItem(PRODUCTS);
    const cost = createElement(CONSTANTS.cost);
    const image = createElement(CONSTANTS.image);

    if (item) {
      image.setAttribute('src', item.img);
      cost.textContent = `+${item.cost}`;
    }

    fallingItem.append(image, cost);
    fallingItem.style.left = `${generatePosition(board)}px`;
    board.append(fallingItem);
    addAnimation(fallingItem);

    image.addEventListener('click', () => {
      if (!fallingItem.classList.contains('game-field__item_blow')) {
        playSound(click);
      }

      if (item) {
        let currentCost = item.cost;

        if (CONSTANTS.doubleCost) {
          currentCost = item.cost * 2;
          cost.textContent = `+${item.cost}x2`;
        }

        store.dispatch(increaseCookiesCount(currentCost));
      }

      image.classList.add('hide');
      cost.classList.remove('hide');
      cost.classList.add('game-field__item-cost');
      setTimeout(() => {
        fallingItem.remove();
      }, 1000);
    });
  }

  static changeSpeed = (newSpeed: number) => {
    this.prevState = CONSTANTS.speed;
    CONSTANTS.speed = newSpeed;

    updateCurrentItems('game-field__item', (e) => {
      const start = e.getBoundingClientRect().top;
      addAnimation(e, start);
    });
  };

  static stopAnimation() {
    window.cancelAnimationFrame(Number(CONSTANTS.idAnime));
  }

  static blow() {
    playSound(sound);
    updateCurrentItems('game-field__item', (e) => {
      const img = e.firstElementChild as HTMLElement;
      e.classList.add('game-field__item_blow');

      if (img) img.click();
      setTimeout(() => {
        e.classList.remove('game-field__item_blow');
      }, 150);
    });
  }

  static doubleCost() {
    CONSTANTS.doubleCost = !CONSTANTS.doubleCost;
  }
}

export default FallingItem;
