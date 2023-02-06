import createElement from '../../common/helpers/createElement';
import './fallingItem.scss';
import { CONSTANTS } from './constants';
import { PRODUCTS } from '../../common/helpers/constants';
import { generatePosition, getRandomItem } from './helpers';
import store from '../../common/components/store/store';
import { increaseCookiesCount } from '../../common/components/store/reducers/cookiesCount';

class FallingItem {
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

    fallingItem.addEventListener('animationend', () => {
      fallingItem.remove();
    });

    image.addEventListener('click', () => {
      image.classList.add('hide');
      cost.classList.remove('hide');
      cost.classList.add('game-field__item-cost');

      if (item) {
        store.dispatch(increaseCookiesCount(item.cost));
      }

      setTimeout(() => {
        fallingItem.remove();
      }, 1000);
    });
  }
}

export default FallingItem;
